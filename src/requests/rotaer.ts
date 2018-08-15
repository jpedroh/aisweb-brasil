import { IAisConfig } from '../common/config'
import { ApiAreas } from '../common/enums'
import { ModelRequest } from '../common/model-request'
import { Rotaer } from '../factories'
import { IComplement, ILight, IRemark, IRunway, IThreshold } from '../factories/rotaer'

export class RotaerRequest extends ModelRequest {

  constructor(config: IAisConfig) {
    super(config, ApiAreas.rotaer)
  }

  protected processRequest(result: any): Rotaer[] {
    if (typeof result === 'string') {
      return []
    }
    const rotaer = new Rotaer({
      workinghour: result.workinghour[0],
      AeroCode: result.AeroCode[0],
      altitude: parseInt(result.altFt[0], 10),
      category: result.cat[0],
      ciad: result.ciad[0],
      city: result.city[0],
      complements: processComplements(result.compls),
      distance: result.distance[0],
      fir: result.fir[0],
      jurisdiction: result.jur[0],
      lat: parseFloat(result.lat[0]),
      latRotaer: result.latRotaer[0],
      lights: processLights(result.lights),
      lng: parseFloat(result.lng[0]),
      lngRotaer: result.lngRotaer[0],
      name: result.name[0],
      organization: {
        military: result.org[0].military[0],
        name: result.org[0].name[0],
        type: result.org[0].type[0],
      },
      remarks: processRemarks(result.rmk[0]),
      state: result.uf[0],
      status: result.status[0],
      type: result.type[0],
      typeUtil: result.typeUtil[0],
      UTC: parseInt(result.utc[0], 10),
      runways: processRunways(result.runways),
    })
    return [rotaer]
  }

}

function processComplements(complements: any[]): IComplement[] {
  return complements[0].compl.map((value: any) => ({
    code: value.$.cod,
    complement: value._,
  }))
}

function processLights(lights: any[]): ILight[] {
  return lights[0].light.map((value: any) => ({
    code: value._,
    description: value.$.descr
  }))
}

function processRemarks(remakrs: any): IRemark[] {
  return remakrs.rmkText.map((value: any) => ({
    code: value.$.cod,
    remark: value._,
  }))
}

function processRunways(runways: any[]): IRunway[] {
  return runways[0].runway.map((value: any) => ({
    ident: value.ident[0],
    length: parseInt(value.length[0]._, 10),
    lights: processLights(value.lights),
    surface: value.surface_c[0]._,
    type: value.type[0],
    width: parseInt(value.width[0]._, 10),
    thresholds: processThresholds(runways[0].runway[0].thr)
  }))
}

function processThresholds(thresholds: any[]): IThreshold[] {
  return thresholds.map((value: any) => ({
    ident: value.ident[0],
    lights: processLights(value.lights),
  }))
}