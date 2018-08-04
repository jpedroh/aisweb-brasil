export class Chart {
  public id: string
  public type: string
  public name: string
  public date: Date
  public link: string

  constructor(data: Chart) {
    this.id = data.id
    this.type = data.type
    this.name = data.name
    this.date = data.date
    this.link = data.link
  }

}
