export class Rotaer {
  public status: string
  public AeroCode: string
  public name: string
  public ciad: string
  public city: string
  public state: string
  public lat: number
  public lng: number
  public latRotaer: string
  public lngRotaer: string
  public distance: string
  public organization: IOrganization
  public type: string
  public typeUtil: string
  public category: string
  public UTC: number
  public altitude: number
  public fir: string
  public jurisdiction: string
  public lights: ILight[]
  public remarks: IRemark[]
  public runways: IRunway[]
  public complements: IComplement[]
  public workinghour: string

  constructor(data: Rotaer) {
    this.status = data.status
    this.AeroCode = data.AeroCode
    this.ciad = data.ciad
    this.name = data.name
    this.city = data.city
    this.state = data.state
    this.lat = data.lat
    this.lng = data.lng
    this.latRotaer = data.latRotaer
    this.lngRotaer = data.lngRotaer
    this.distance = data.distance
    this.organization = data.organization
    this.workinghour = data.workinghour
    this.type = data.type
    this.typeUtil = data.typeUtil
    this.category = data.category
    this.UTC = data.UTC
    this.altitude = data.altitude
    this.fir = data.fir
    this.jurisdiction = data.jurisdiction
    this.lights = data.lights
    this.runways = data.runways
    this.remarks = data.remarks
    this.complements = data.complements
  }

}

export interface IOrganization {
  name: string
  type: string
  military: string
}

export interface IComplement {
  code: string
  complement: string
}

export interface ILight {
  code: string
  description: string
}

export interface IRunway {
  type: string
  ident: string
  surface: string
  length: number
  width: number
  lights: ILight[]
  thresholds: IThreshold[]
}

export interface IThreshold {
  ident: string
  lights: ILight[]
}

export interface IRemark {
  code: string
  remark: string
}
