export class Meteorology {
  public metar: string | null
  public taf: string | null

  constructor(data: Meteorology) {
    this.metar = data.metar
    this.taf = data.taf
  }

}
