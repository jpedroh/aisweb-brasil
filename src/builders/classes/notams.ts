export class Notam {
  public id: string
  public cod: string
  public status: string
  public tp: string
  public dt: Date
  public n: string
  public b: string
  public c: string
  public e: string
  
  constructor({ id, cod, status, tp, dt, n, b, c, e }: { id: string, cod: string, status: string, tp: string, dt: string, n: string, b: string, c: string, e: string }) {
    this.id = id;
    this.cod = cod;
    this.status = status;
    this.tp = tp;
    const dateFormat: Array<string> = dt.split('-')
    this.dt = new Date(parseInt(dateFormat[0]), parseInt(dateFormat[1]), parseInt(dateFormat[2]));
    this.n = n;
    this.b = b;
    this.c = c;
    this.e = e;
  }

}