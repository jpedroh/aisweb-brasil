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

  constructor(data: Notam) {
    this.id = data.id
    this.cod = data.cod
    this.status = data.status
    this.tp = data.tp
    this.date = data.date
    this.n = data.n
    this.b = data.b
    this.c = data.c
    this.e = data.e
    this.s = data.s
    this.geo = data.geo
    this.origem = data.origem
  }

}
