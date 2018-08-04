import { IAisConfig } from '../common/config'
import { ApiAreas } from '../common/enums'
import { ModelRequest } from '../common/model-request'
import { Meteorology } from '../factories'

export class MeteorologyRequest extends ModelRequest {

  constructor(config: IAisConfig) {
    super(config, ApiAreas.meteorology)
  }

  protected processRequest(result: any): Meteorology[] {
    if (!result) {
      return []
    }
    const mets: Meteorology[] = []
    mets.push(new Meteorology({
      metar: result.met[0].metar[0],
      taf: result.met[0].taf[0],
    }))
    return mets
  }

}
