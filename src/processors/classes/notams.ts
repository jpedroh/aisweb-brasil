import { parseString } from 'xml2js';
import { Notam } from '../../builders';
import Processor from '../contract';

export class NotamProcessor implements Processor {
  public processRequest({ data }: { data: string }): Array<Notam> {
    const notams: Array<Notam> = []
    parseString(data, (error, result) => {
      result.aisweb.notam[0].item.forEach((notam: any) => {
        return notams.push(new Notam({
          id: notam['$'].id,
          cod: notam.cod[0],
          status: notam.status[0],
          tp: notam.tp[0],
          dt: notam.dt[0],
          n: notam.n[0],
          b: notam.b[0],
          c: notam.c[0],
          e: notam.e[0]
        }))
      })
    })
    return notams
  }
}