import { IAisCredentials } from '../common/ais-credentials'
import { convertDate } from '../common/convert-date'
import { ApiAreas } from '../common/api-areas'
import { ModelRequest } from '../common/model-request'
import { AipSuplement } from '../factories'

export class AipSuplementRequest extends ModelRequest<AipSuplement> {

  constructor(config: IAisCredentials) {
    super(config, ApiAreas.aip)
  }

  protected processRequest(result: any): AipSuplement[] {
    if (!result) {
      return []
    }
    const suplements: AipSuplement[] = []
    result.suplementos[0].item.forEach((suplement: any) => {
      return suplements.push(new AipSuplement({
        anexo: suplement.anexo[0],
        date: convertDate(suplement.dt[0]),
        duration: suplement.duracao[0],
        id: suplement.id[0],
        local: suplement.local[0],
        n: suplement.n[0],
        ref: suplement.ref[0],
        serie: suplement.serie[0],
        status: suplement.status[0],
        text: suplement.texto[0],
        title: suplement.titulo[0],
        type: suplement.tipo[0],
      }))
    })
    return suplements
  }

}
