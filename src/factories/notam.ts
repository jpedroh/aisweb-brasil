export class Notam {
  public id: string
  public cod: string
  public status: string
  public cat: string
  public tp: string
  public date: Date
  public n: string
  public ref: string
  public loc: string
  public b: string | Date
  public c: string | Date
  public d: string
  public e: string
  public f: string
  public g: string
  public nof: string
  public s: string
  public geo: string
  public airport: string
  public city: string
  public uf: string
  public origin: string

  constructor(data: Notam) {
    this.id = data.id
    this.cod = data.cod
    this.status = data.status
    this.cat = data.cat
    this.tp = data.tp
    this.date = data.date
    this.n = data.n
    this.ref = data.ref
    this.loc = data.loc
    this.b = data.b
    this.c = data.c
    this.d = data.d
    this.e = data.e
    this.f = data.f
    this.g = data.g
    this.nof = data.nof
    this.s = data.s
    this.geo = data.geo
    this.airport = data.airport
    this.city = data.city
    this.uf = data.uf
    this.origin = data.origin
  }

}
