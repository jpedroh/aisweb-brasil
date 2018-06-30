import { parseString } from 'xml2js';
import { Chart } from '../../builders';
import Processor from '../contract';

export class ChartProcessor implements Processor {
  public processRequest({ data }: { data: string }): Array<Chart> {
    const charts: Array<Chart> = []
    parseString(data, (error, result) => {
      result.aisweb.cartas[0].item.forEach((chart: any) => {
        return charts.push(new Chart({
          id: chart['$'].id,
          type: chart.tipo[0],
          name: chart.nome[0],
          date: chart.dt[0],
          link: chart.link[0]
        }))
      })
    })
    return charts
  }
}