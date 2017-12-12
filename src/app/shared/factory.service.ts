import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import {Factory} from "./factory.model";


@Injectable()
export class FactoryService {

  factoriesChanged = new Subject<Factory[]>();
  factoryChanged = new Subject<Factory>();
  private factories: Factory[] ;
  private  factory: Factory;

  constructor() {}

  setFactories(factories: Factory[]) {
    this.factories = factories;
    this.factoriesChanged.next(this.factories.slice());
  }


  getFactory(id: string) {
    const index = this.factories.findIndex(x => x._id == id);;
    this.factory  = this.factories[index];
    this.factoryChanged.next(this.factory);
    return this.factory;
  }

  editFactory(factory: Factory, id: string) {
    const index = this.factories.findIndex(x => x._id == id);
    this.factories[index] = factory;
    this.factoriesChanged.next(this.factories.slice());
  }

  addFactory(factory: Factory) {

    this.factories.push(factory);
    this.factoriesChanged.next(this.factories.slice());
  }

  deleteFactory(id: string) {
    const index = this.factories.findIndex(x => x._id == id);
    this.factories.splice(index, 1);
    this.factoriesChanged.next(this.factories.slice());
  }


}
