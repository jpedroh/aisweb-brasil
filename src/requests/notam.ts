import { IAisConfig } from '../common/config'
import { convertDate } from '../common/convert-date'
import { ApiAreas } from '../common/enums'
import { ModelRequest } from '../common/model-request'
import { Notam } from '../factories'

export class NotamRequest extends ModelRequest {

  constructor(config: IAisConfig) {
    super(config, ApiAreas.notams)
  }

  protected processRequest(result: any): Notam[] {
    if (!result) {
      return []
    }
    const notams: Notam[] = []
    result.notam[0].item.forEach((notam: any) => {
      return notams.push(new Notam({
        id: parseInt(notam.id[0], 10),
        cod: notam.cod[0],
        status: notam.status[0],
        tp: notam.tp[0],
        date: convertDate(notam.dt[0]),
        n: notam.n[0],
        b: notam.b[0],
        c: notam.c[0],
        e: notam.e[0],
        s: notam.s[0],
        geo: notam.geo[0],
        origem: notam.origem[0],
      }))
    })
    return notams
  }

}
