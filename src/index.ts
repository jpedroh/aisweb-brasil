import { AipSuplement, Chart, Meteorology, Notam } from './builders';
import { AipSuplementProcessor, ChartProcessor, MeteorologyProcessor, NotamProcessor } from './processors';
import AisConfig from './utils/config';
import { ApiAreas } from './utils/enums';
import RequestHandler from './utils/request';

export default class Ais {
  private config: AisConfig

  constructor({ apiKey, apiPass }: { apiKey: string, apiPass: string }) {
    this.config = new AisConfig({ apiKey, apiPass })
  }

  public getCharts(...airports: Array<string>): Promise<Array<Array<Chart>>> {
    const requestHandler = new RequestHandler(this.config, ApiAreas.charts);
    return Promise.all(airports.map(airport => requestHandler.performRequest(airport, new ChartProcessor())));
  }

  public getNotams(...airports: Array<string>): Promise<Array<Array<Notam>>> {
    const requestHandler = new RequestHandler(this.config, ApiAreas.notams);
    return Promise.all(airports.map(airport => requestHandler.performRequest(airport, new NotamProcessor())));
  }

  public getAipSuplements(...airports: Array<string>): Promise<Array<Array<AipSuplement>>> {
    const requestHandler = new RequestHandler(this.config, ApiAreas.aip);
    return Promise.all(airports.map(airport => requestHandler.performRequest(airport, new AipSuplementProcessor())));
  }

  public getMeteorology(...airports: Array<string>): Promise<Array<Array<Meteorology>>> {
    const requestHandler = new RequestHandler(this.config, ApiAreas.meteorology);
    return Promise.all(airports.map(airport => requestHandler.performRequest(airport, new MeteorologyProcessor())));
  }

}