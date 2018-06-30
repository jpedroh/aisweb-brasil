import { parseString } from 'xml2js';
import { AipSuplement } from '../../builders';
import Processor from '../contract';

export class AipSuplementProcessor implements Processor {
  public processRequest({ data }: { data: string }): Array<AipSuplement> {
    const suplements: Array<AipSuplement> = []
    parseString(data, (error, result) => {
      result.aisweb.suplementos[0].item.forEach((suplement: any) => {
        return suplements.push(new AipSuplement({
          id: suplement['$'].id,
          n: suplement.n[0],
          serie: suplement.serie[0],
          local: suplement.local[0],
          date: suplement.dt[0],
          title: suplement.titulo[0],
          text: suplement.texto[0],
          duration: suplement.duracao[0]
        }))
      })
    })
    return suplements
  }
}