export class Factory {
  public _id: string;
  public name: string;
  public city: string;


  constructor(name: string, city: string, id?: string) {
    this._id = id || "";
    this.name = name;
    this.city = city;
  }
}
