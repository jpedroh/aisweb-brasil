import Axios, { AxiosResponse } from 'axios'
import { InvalidCredentialsError } from '../errors/invalid-credentials-error'
import { IAisConfig } from './config'
import { ApiAreas } from './enums'
import { parseString } from 'xml2js'
import { ParseError } from '../errors/parse-error'

export abstract class ModelRequest {
  protected requestUrl: string

  constructor(config: IAisConfig, area: ApiAreas) {
    const baseUrl = 'https://www.aisweb.aer.mil.br/api/'
    this.requestUrl = `${baseUrl}?apiKey=${config.apiKey}&apiPass=${config.apiPass}&area=${area}`
  }

  public performRequest(airportIcao: string): Promise<any[]> {
    return Axios.get(`${this.requestUrl}&IcaoCode=${airportIcao}`)
      .then((body: AxiosResponse): string => {
        if (body.data.indexOf('Informe uma chave válida na URL') !== -1) {
          throw new InvalidCredentialsError('Informed credentials are invalid')
        }
        return body.data
      })
      .then(this.xmlParse)
      .then(this.processRequest)
  }

  protected abstract processRequest(data: any[]): any

  private xmlParse(data: string): any {
    let parsedData: any = null
    if (data.indexOf('total="0"') !== -1) {
      return null
    }
    parseString(data, (error: any, result: any) => {
      if (error) {
        throw new ParseError(error, 'There was a problem parsing the XML data')
      }
      parsedData = result
    })
    return parsedData.aisweb
  }

}
