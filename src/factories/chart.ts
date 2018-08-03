export class Chart {
  public id: string
  public type: string
  public name: string
  public date: Date
  public link: string

  constructor({ id, type, name, date, link }: { id: string, type: string, name: string, date: Date, link: string }) {
    this.id = id
    this.type = type
    this.name = name
    this.date = date
    this.link = link
  }

}
