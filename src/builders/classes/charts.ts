import { ChartTypes } from '../../utils/enums';

export class Chart {
  public id: string;
  public type: ChartTypes;
  public name: string;
  public date: Date;
  public link: string;

  constructor({ id, type, name, date, link }: { id: string, type: string, name: string, date: string, link: string }) {
    this.id = id;
    this.type = <ChartTypes>type;
    this.name = name;
    const dateFormat: Array<string> = date.split('-')
    this.date = new Date(parseInt(dateFormat[0]), parseInt(dateFormat[1]), parseInt(dateFormat[2]));
    this.link = link;
  }

}