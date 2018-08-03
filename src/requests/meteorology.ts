import { parseString } from 'xml2js'
import { IAisConfig } from '../common/config'
import { ApiAreas } from '../common/enums'
import { ModelRequest } from '../common/model-request'
import { ParseError } from '../errors/parse-error'
import { Meteorology } from '../factories'

export class MeteorologyRequest extends ModelRequest {

  constructor(config: IAisConfig) {
    super(config, ApiAreas.meteorology)
  }

  protected processRequest(data: string): Meteorology[] {
    const mets: Meteorology[] = []
    parseString(data, (error, result) => {
      if (error) {
        throw new ParseError('There was a problem parsing the XML data', error)
      }
      mets.push(new Meteorology({
        metar: result.aisweb.met[0].metar[0],
        taf: result.aisweb.met[0].taf[0],
      }))
    })
    return mets
  }

}
