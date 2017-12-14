export class Factory {
  public _id: string;
  public name: string;
  public city: string;
  public description: string;
  public image_url: string;


  constructor(name: string, city: string, description: string,
              image_url: string, id?: string) {
    this._id = id || "";
    this.name = name;
    this.city = city;
    this.image_url = image_url;
    this.description = description;
  }
}
