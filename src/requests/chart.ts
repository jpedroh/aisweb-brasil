import { parseString } from 'xml2js'
import { IAisConfig } from '../common/config'
import { convertDate } from '../common/convert-date'
import { ApiAreas } from '../common/enums'
import { ModelRequest } from '../common/model-request'
import { ParseError } from '../errors/parse-error'
import { Chart } from '../factories'

export class ChartRequest extends ModelRequest {

  constructor(config: IAisConfig) {
    super(config, ApiAreas.charts)
  }

  protected processRequest(data: string): Chart[] {
    const charts: Chart[] = []
    if (data.indexOf('total="0"') !== -1) {
      return charts
    }
    parseString(data, (error, result) => {
      if (error) {
        throw new ParseError('There was a problem parsing the XML data', error)
      }
      result.aisweb.cartas[0].item.forEach((chart: any) => {
        return charts.push(new Chart({
          id: chart.id[0],
          type: chart.tipo[0],
          name: chart.nome[0],
          date: convertDate(chart.dt[0]),
          link: chart.link[0].split('apikey')[0],
        }))
      })
    })
    return charts
  }

}
