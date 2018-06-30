export class Meteorology {
  public loc: string;
  public metar: string;
  public taf: string;

  constructor({ loc, metar, taf }: { loc: string, metar: string, taf: string }) {
    this.loc = loc;
    this.metar = metar;
    this.taf = taf;
  }

}