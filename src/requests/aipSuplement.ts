import { parseString } from 'xml2js'
import { IAisConfig } from '../common/config'
import { convertDate } from '../common/convert-date'
import { ApiAreas } from '../common/enums'
import { ModelRequest } from '../common/model-request'
import { ParseError } from '../errors/parse-error'
import { AipSuplement } from '../factories'

export class AipSuplementRequest extends ModelRequest {

  constructor(config: IAisConfig) {
    super(config, ApiAreas.aip)
  }

  protected processRequest(data: string): AipSuplement[] {
    const suplements: AipSuplement[] = []
    if (data.indexOf('total="0"') !== -1) {
      return suplements
    }
    parseString(data, (error, result) => {
      if (error) {
        throw new ParseError('There was a problem parsing the XML data', error)
      }
      result.aisweb.suplementos[0].item.forEach((suplement: any) => {
        return suplements.push(new AipSuplement({
          id: suplement.id[0],
          n: suplement.n[0],
          serie: suplement.serie[0],
          local: suplement.local[0],
          date: convertDate(suplement.dt[0]),
          title: suplement.titulo[0],
          text: suplement.texto[0],
          duration: suplement.duracao[0],
          status: suplement.status[0],
          ref: suplement.ref[0],
        }))
      })
    })
    return suplements
  }

}
