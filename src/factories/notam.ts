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
                origem: string }) {
    this.id = parseInt(id, 10)
    this.cod = cod
    this.status = status
    this.tp = tp
    this.date = date
    this.n = n
    this.b = b
    this.c = c
    this.e = e
    this.s = s
    this.geo = geo
    this.origem = origem
  }

}
