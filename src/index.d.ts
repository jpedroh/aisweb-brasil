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
     * @return {Promise<Metereology[][]>} - An array of airports, each one containing an array of Metereologies.
     */
    public getMeteorology(...airports: string[]): Promise<Meteorology[][]>
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
  
    constructor({ id, n, serie, local, date, title, text, duration, status, ref }:
                { id: string, n: string, serie: string, local: string, date: Date, title: string,
                  text: string, duration: string, status: string, ref: string })
  
  }

  export class Chart {
    public id: string
    public type: string
    public name: string
    public date: Date
    public link: string
  
    constructor({ id, type, name, date, link }: { id: string, type: string, name: string, date: Date, link: string })
  
  }

  export class Meteorology {
    public metar: string
    public taf: string
  
    constructor({ metar, taf }: { metar: string, taf: string })
  
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
  
    constructor({ id, cod, status, tp, date, n, b, c, e, s, geo, origem }:
                { id: string, cod: string, status: string, tp: string, date: Date,
                  n: string, b: string, c: string, e: string, s: string, geo: string,
                  origem: string })
  
  }

  export class InvalidCredentialsError extends Error {
    constructor(message?: string)  
  }

  export class ParseError extends Error {
    public errorData: any
    constructor(errorData: any, message?: string)
  }

}