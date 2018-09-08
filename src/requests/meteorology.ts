import { IAisCredentials } from '../common/ais-credentials'
import { ApiAreas } from '../common/api-areas'
import { ModelRequest } from '../common/model-request'
import { Meteorology } from '../factories'

export class MeteorologyRequest extends ModelRequest<Meteorology> {

  constructor(config: IAisCredentials) {
    super(config, ApiAreas.meteorology)
  }

  protected processRequest(result: any): Meteorology[] {
    if (!result) {
      return []
    }
    const mets: Meteorology[] = []
    mets.push(new Meteorology({
      metar: result.met[0].metar[0].indexOf('zada na base de dados da REDEMET') !== -1 ? null : result.met[0].metar[0],
      taf: result.met[0].taf[0].indexOf('localizada na base de dados da REDEMET') !== -1 ? null : result.met[0].taf[0],
    }))
    return mets
  }

}
