import { IAisCredentials } from '../common/ais-credentials'
import { convertDate } from '../common/convert-date'
import { ApiAreas } from '../common/api-areas'
import { ModelRequest } from '../common/model-request'
import { Chart } from '../factories'

export class ChartRequest extends ModelRequest<Chart> {

  constructor(config: IAisCredentials) {
    super(config, ApiAreas.charts)
  }

  protected processRequest(result: any): Chart[] {
    if (!result) {
      return []
    }
    const charts: Chart[] = []
    result.cartas[0].item.forEach((chart: any) => {
      return charts.push(new Chart({
        date: convertDate(chart.dt[0]),
        fileName: chart.arquivo[0],
        icp: chart.icp[0],
        id: chart.id[0],
        link: chart.link[0].split('apikey=')[0],
        name: chart.nome[0],
        notam: chart.notam[0],
        pe: chart.pe[0],
        species: chart.especie[0],
        tabcode: chart.tabcode[0],
        type: chart.tipo[0],
        typeDescription: chart.tipo_descr[0],
      }))
    })
    return charts
  }

}
