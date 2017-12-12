import {Bean} from "./bean.model";


export class Bar {
  public _id: string;
  public name: string;
  public beans: Bean[];


  constructor(name: string,  beans: Bean[], id?: string,) {
    this._id = id || "";
    this.name = name;
    this.beans = beans;
  }

}
