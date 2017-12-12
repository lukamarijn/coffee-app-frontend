import {Factory} from "./factory.model";
export class Bean {
  public _id: string;
  public title: string;
  public  image_url: string;
  public large_image_url: string;
  public factory_id: string;
  public roasting_house : Factory;
  public type: string;
  public taste: string;
  public plantation: string;
  public country: string;


  constructor(title: string, image_url: string, large_image_url: string,
              factory_id: string, type: string, taste: string, plantation: string,
              country: string, id?: string, roasting_house?: Factory ) {
    this._id = id || "";
    this.title = title;
    this.image_url = image_url;
    this.large_image_url = large_image_url;
    this.factory_id = factory_id;
    this.roasting_house = roasting_house;
    this.country = country;
    this.type = type;
    this.taste = taste;
    this.plantation = plantation;

  }
}
