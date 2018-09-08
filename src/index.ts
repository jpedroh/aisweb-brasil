import { IAisCredentials } from './common/ais-credentials'
import { AipSuplement, Chart, Meteorology, Notam, Rotaer } from './factories'
import { AipSuplementRequest, ChartRequest, MeteorologyRequest, NotamRequest, RotaerRequest } from './requests'

export default class Ais {

  constructor(private config: IAisCredentials) { }

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

  public getRotaer(...airports: string[]): Promise<Rotaer[][]> {
    const requestHandler = new RotaerRequest(this.config)
    return Promise.all(airports.map((airport: string) => requestHandler.performRequest(airport)))
  }

}
