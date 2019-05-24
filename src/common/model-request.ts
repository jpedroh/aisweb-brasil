import { parseString } from 'xml2js'
import { InvalidCredentialsError } from '../errors/invalid-credentials-error'
import { ParseError } from '../errors/parse-error'
import { IAisCredentials } from './ais-credentials'
import { ApiAreas } from './api-areas'
import Axios from 'axios'

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
    return Axios.get(`${this.requestUrl}&IcaoCode=${airportIcao}`)
      .then(response => {
        if(response.data.includes('Informe uma chave válida na URL') ||
          response.data.includes('Erro nos parametros obrigatórios')) {
          throw new InvalidCredentialsError('Informed credentials are invalid')
        }
        return response.data
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
