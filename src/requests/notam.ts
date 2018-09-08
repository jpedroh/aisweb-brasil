import { IAisCredentials } from '../common/ais-credentials'
import { ApiAreas } from '../common/api-areas'
import { convertDate } from '../common/convert-date'
import { ModelRequest } from '../common/model-request'
import { Notam } from '../factories'

export class NotamRequest extends ModelRequest<Notam> {

  constructor(config: IAisCredentials) {
    super(config, ApiAreas.notams)
  }

  protected processRequest(result: any): Notam[] {
    if (!result) {
      return []
    }
    const notams: Notam[] = []
    result.notam[0].item.forEach((notam: any) => {
      return notams.push(new Notam({airport: notam.aero[0],
        b: formatNotamDate(notam.b[0]),
        c: formatNotamDate(notam.c[0]),
        cat: notam.cat[0],
        city: notam.cidade[0],
        cod: notam.cod[0],
        d: notam.d[0],
        date: convertDate(notam.dt[0]),
        e: notam.e[0],
        f: notam.f[0],
        g: notam.g[0],
        geo: notam.geo[0],
        id: notam.id[0],
        loc: notam.loc[0],
        n: notam.n[0],
        nof: notam.nof[0],
        origin: notam.origem[0],
        ref: notam.ref[0],
        s: notam.s[0],
        status: notam.status[0],
        tp: notam.tp[0],
        uf: notam.uf[0],
      }))
    })
    return notams
  }

}

function formatNotamDate(date: string): string | Date {
  if (date === 'PERM') {
    return date
  }
  const notamYear = 2000 + parseInt(date.substr(0, 2), 10)
  const notamMonth = parseInt(date.substr(2, 2), 10)
  const notamDay = parseInt(date.substr(4, 2), 10)
  const notamHour = parseInt(date.substr(6, 2), 10)
  const notamMinute = parseInt(date.substr(8, 2), 10)
  return new Date(Date.UTC(notamYear, notamMonth, notamDay, notamHour, notamMinute))
}
