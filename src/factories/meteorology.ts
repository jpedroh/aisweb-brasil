export class Meteorology {
  public metar: string
  public taf: string

  constructor({ metar, taf }: { metar: string, taf: string }) {
    this.metar = metar
    this.taf = taf
  }

}
