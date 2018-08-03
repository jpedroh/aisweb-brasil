import { IAisConfig } from './common/config'
import { AipSuplement, Chart, Meteorology, Notam } from './factories'
import { AipSuplementRequest, ChartRequest, MeteorologyRequest, NotamRequest } from './requests'

export default class Ais {

  constructor(private config: IAisConfig) {}

  public getCharts(...airports: string[]): Promise<Chart[][]> {
    const requestHandler = new ChartRequest(this.config)
    return Promise.all(airports.map((airport: string) => requestHandler.performRequest(airport)))
  }

  public getNotams(...airports: string[]): Promise<Notam[][]> {
    const requestHandler = new NotamRequest(this.config)
    return Promise.all(airports.map((airport: string) => requestHandler.performRequest(airport)))
  }

  public getAipSuplements(...airports: string[]): Promise<AipSuplement[][]> {
    const requestHandler = new AipSuplementRequest(this.config)
    return Promise.all(airports.map((airport: string) => requestHandler.performRequest(airport)))
  }

  public getMeteorology(...airports: string[]): Promise<Meteorology[][]> {
    const requestHandler = new MeteorologyRequest(this.config)
    return Promise.all(airports.map((airport: string) => requestHandler.performRequest(airport)))
  }

}
