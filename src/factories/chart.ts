export class Chart {
  public id: string
  public species: string
  public type: string
  public typeDescription: string
  public name: string
  public date: Date
  public link: string
  public fileName: string
  public icp: string
  public pe: string
  public notam: string
  public tabcode: string

  constructor(data: Chart) {
    this.id = data.id
    this.species = data.species
    this.type = data.type
    this.typeDescription = data.typeDescription
    this.name = data.name
    this.date = data.date
    this.link = data.link
    this.fileName = data.fileName
    this.icp = data.icp
    this.pe = data.pe
    this.notam = data.notam
    this.tabcode = data.tabcode
  }

}
