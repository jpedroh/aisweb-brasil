import { parseString } from 'xml2js';
import { Meteorology } from '../../builders';
import Processor from '../contract';

export class MeteorologyProcessor implements Processor {
  public processRequest({ data }: { data: string }): Array<Meteorology> {
    const mets: Array<Meteorology> = []
    parseString(data, (error, result) => {
      mets.push(new Meteorology({
        loc: result.aisweb.met[0].loc[0],
        metar: result.aisweb.met[0].metar[0],
        taf: result.aisweb.met[0].taf[0]
      }))
    })
    return mets
  }
}