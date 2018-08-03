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
                text: string, duration: string, status: string, ref: string }) {
    this.id = id
    this.n = n
    this.serie = serie
    this.local = local
    this.date = date
    this.title = title
    this.text = text
    this.duration = duration
    this.status = status
    this.ref = ref
  }

}
