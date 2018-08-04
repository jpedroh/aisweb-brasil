declare module 'aisweb-brasil' {
  
  export default class Ais {
    private config: IAisConfig

    constructor(config: IAisConfig)

    /**
     * Retrieves charts from one or more airports.
     * @param {...airports} - ICAO code of each airport.
     * @return {Promise<Chart[][]>} - An array of airports, each one containing an array of Charts.
     */
    public getCharts(...airports: string[]): Promise<Chart[][]>

    /**
     * Retrieves notams from one or more airports.
     * @param {...airports} - ICAO code of each airport.
     * @return {Promise<Notam[][]>} - An array of airports, each one containing an array of Notams.
     */
    public getNotams(...airports: string[]): Promise<Notam[][]>

    /**
     * Retrieves Aip Suplements from one or more airports.
     * @param {...airports} - ICAO code of each airport.
     * @return {Promise<AipSuplement[][]>} - An array of airports, each one containing an array of Aip Suplements.
     */
    public getAipSuplements(...airports: string[]): Promise<AipSuplement[][]>

    /**
     * Retrieves Metereology from one or more airports.
     * @param {...airports} - ICAO code of each airport.
     * @return {Promise<Meteorology[][]>} - An array of airports, each one containing an array of Metereologies.
     */
    public getMeteorology(...airports: string[]): Promise<Meteorology[][]>

    /**
     * Retrieves Rotaer from one or more airports.
     * @param {...airports} - ICAO code of each airport.
     * @return {Promise<Rotaer[][]>} - An array of airports, each one containing an array of Metereologies.
     */
    public getRotaer(...airports: string[]): Promise<Rotaer[][]>
  }

  /**
   * Interface containing the credentials to access AisWeb API.
   *
   * @interface
   */
  export interface IAisConfig {
    apiKey: string
    apiPass: string
  }

  export class AipSuplement {
    public id: string
    public n: string
    public serie: string
    public local: string
    public date: Date
    public title: string
    public text: string
    public duration: string
    public status: string
    public ref: string
  
    constructor(data: AipSuplement)
  }

  export class Chart {
    public id: string
    public type: string
    public name: string
    public date: Date
    public link: string
  
    constructor(data: Chart)
  }

  export class Meteorology {
    public metar: string
    public taf: string
  
    constructor(data: Meteorology)
  }
  
  export class Notam {
    public id: number
    public cod: string
    public status: string
    public tp: string
    public date: Date
    public n: string
    public b: string
    public c: string
    public e: string
    public s: string
    public geo: string
    public origem: string
  
    constructor(data: Notam)
  }
  export class Rotaer {
    public status: string
    public name: string
    public ciad: string
    public city: string
    public state: string
    public lat: number
    public lng: number
    public latRotaer: string
    public lngRotaer: string
    public distance: string
    public organization: IOrganization
    public type: string
    public typeUtil: string
    public category: string
    public UTC: number
    public altitude: number
    public fir: string
    public jurisdiction: string
    public lights: ILight[]
    public remarks: IRemark[]
    public runways: IRunway[]
    public complements: IComplement[]
  
    constructor(data: Rotaer)
  }
  
  export interface IOrganization {
    name: string
    type: string
    military: string
  }
  
  export interface IComplement {
    code: string
    complement: string
  }
  
  export interface ILight {
    code: string
    description: string
  }
  
  export interface IRunway {
    type: string
    ident: string
    surface: string
    length: number
    width: number
    lights: ILight[]
  }
  
  export interface IRemark {
    code: string
    remark: string
  }   

  export class InvalidCredentialsError extends Error {
    constructor(message?: string)  
  }

  export class ParseError extends Error {
    public errorData: any
    constructor(errorData: any, message?: string)
  }

}