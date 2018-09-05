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
        id: notam.id[0],
        cod: notam.cod[0],
        status: notam.status[0],
        cat: notam.cat[0],
        tp: notam.tp[0],
        date: convertDate(notam.dt[0]),
        n: notam.n[0],
        ref: notam.ref[0],
        loc: notam.loc[0],
        b: formatNotamDate(notam.b[0]),
        c: formatNotamDate(notam.c[0]),
        d: notam.d[0],
        e: notam.e[0],
        f: notam.f[0],
        g: notam.g[0],
        nof: notam.nof[0],
        s: notam.s[0],
        geo: notam.geo[0],
        airport: notam.aero[0],
        city: notam.cidade[0],
        uf: notam.uf[0],
        origin: notam.origem[0],
      }))
    })
    return notams
  }

}

function formatNotamDate (date: string): string | Date {
  return date === 'PERM' ? date : new Date(Date.UTC(2000 + parseInt(date.substr(0, 2)), parseInt(date.substr(2, 2)), parseInt(date.substr(4, 2)), parseInt(date.substr(6, 2)), parseInt(date.substr(8, 2))))
}