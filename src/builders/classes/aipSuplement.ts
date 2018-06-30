export class AipSuplement {
  public id: string;
  public n: string;
  public serie: string;
  public local: string;
  public date: Date;
  public title: string;
  public text: string;
  public duration: string;

  constructor({ id, n, serie, local, date, title, text, duration }: { id: string, n: string, serie: string, local: string, date: string, title: string, text: string, duration: string }) {
    this.id = id;
    this.n = n;
    this.serie = serie;
    this.local = local;
    const dateFormat: Array<string> = date.split('-')
    this.date = new Date(parseInt(dateFormat[0]), parseInt(dateFormat[1]), parseInt(dateFormat[2]));
    this.title = title;
    this.text = text;
    this.duration = duration;
  }

}