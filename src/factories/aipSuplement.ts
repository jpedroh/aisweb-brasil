export class AipSuplement {
  public id: string
  public type: string
  public n: string
  public serie: string
  public local: string
  public date: Date
  public title: string
  public text: string
  public duration: string
  public status: string
  public ref: string
  public anexo: string

  constructor(data: AipSuplement) {
    this.id = data.id
    this.n = data.n
    this.serie = data.serie
    this.type = data.type
    this.local = data.local
    this.date = data.date
    this.title = data.title
    this.text = data.text
    this.duration = data.duration
    this.status = data.status
    this.ref = data.ref
    this.anexo = data.anexo
  }

}
