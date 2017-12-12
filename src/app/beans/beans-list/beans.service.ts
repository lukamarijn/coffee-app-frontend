import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import {Bean} from "../../shared/bean.model";
import {forEach} from "@angular/router/src/utils/collection";

@Injectable()
export class BeanService {

  beansChanged = new Subject<Bean[]>();
  beanChanged = new Subject<Bean>();
  private bean: Bean;
  private beans: Bean[];

  constructor() {
  }

  getBean(id: string) {
    const index = this.beans.findIndex(x => x._id == id);
    console.log(this.beans[index].large_image_url);
    console.log(this.beans);
    this.bean = this.beans[index];
    this.beanChanged.next(this.bean);
    return this.bean;
  }


  setBeans(beans: Bean[]) {
    this.beans = beans;
    this.beansChanged.next(this.beans.slice());
  }


  deleteBean(id: string) {
    const index = this.beans.findIndex(x => x._id == id);
    this.beans.splice(index, 1);
    this.beansChanged.next(this.beans.slice());
  }

  editBean(bean: Bean, id: string) {
    const index = this.beans.findIndex(x => x._id == id);
    console.log(bean);
    this.beans[index] = bean;
    this.beansChanged.next(this.beans.slice());
  }

  addBean(bean: Bean) {
    console.log(bean);
    this.beans.push(bean);
    this.beansChanged.next(this.beans.slice());
  }
}
