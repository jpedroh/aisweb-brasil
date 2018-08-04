export class Meteorology {
  public metar: string
  public taf: string

  constructor(data: Meteorology) {
    this.metar = data.metar
    this.taf = data.taf
  }

}
