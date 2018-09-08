import request from 'request'
import { parseString } from 'xml2js'
import { InvalidCredentialsError } from '../errors/invalid-credentials-error'
import { ParseError } from '../errors/parse-error'
import { RequestError } from '../errors/request-error'
import { IAisCredentials } from './ais-credentials'
import { ApiAreas } from './api-areas'

export abstract class ModelRequest<Model> {
  protected requestUrl: string

  constructor(config: IAisCredentials, area: ApiAreas) {
    const baseUrl = 'https://www.aisweb.aer.mil.br/api/'
    this.requestUrl = `${baseUrl}?apiKey=${config.apiKey}&apiPass=${config.apiPass}&area=${area}`
  }

  public performRequest(airportIcao: string): Promise<Model[]> {
    return this.apiFetcher(airportIcao)
      .then(this.xmlParse)
      .then(this.processRequest)
  }

  protected abstract processRequest(data: string): Model[]

  private apiFetcher(airportIcao: string): Promise<string> {
    return new Promise((res, rej) => {
      request(`${this.requestUrl}&IcaoCode=${airportIcao}`, (error: any, response: any, body: any) => {
        if (error || response.statusCode === 500) {
          rej(new RequestError('Request failed'))
        } else if (body.indexOf('Informe uma chave válida na URL') !== -1
                  || body.indexOf('Erro nos parametros obrigatórios') !== -1) {
          rej(new InvalidCredentialsError('Informed credentials are invalid'))
        } else {
          res(body)
        }
      })
    })
  }

  private xmlParse(data: string): any {
    let parsedData: any = null
    if (data.indexOf('total="0"') !== -1) {
      return null
    }
    parseString(data, (error: any, result: any) => {
      if (error) {
        throw new ParseError('There was a problem parsing the XML data')
      }
      parsedData = result
    })
    return parsedData.aisweb
  }

}
