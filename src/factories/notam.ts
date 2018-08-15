export class Notam {
  id: string
  cod: string
  status: string
  cat: string
  tp: string
  date: Date
  n: string
  ref: string
  loc: string
  b: string
  c: string
  d: string
  e: string
  f: string
  g: string
  nof: string
  s: string
  geo: string
  airport: string
  city: string
  uf: string
  origin: string

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
