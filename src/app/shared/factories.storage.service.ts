import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import 'rxjs/Rx';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

import {FactoryService} from "./factory.service";
import {Factory} from "./factory.model";

@Injectable()


export class FactoriesStorageService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private serverUrl = environment.serverUrl + '/roastinghouses/'; // URL to web api

  constructor(private http: Http, private factoriesService: FactoryService) {
  }

  getFactories() {
    this.http.get(this.serverUrl)
      .map(
        (response) => {
          const factories: Factory[] = response.json();
          return factories;
        }
      ).subscribe(
      (factories: Factory[]) => {
        this.factoriesService.setFactories(factories)
      }
    );
  }


  getFactoryById(id: string) {

    this.http.get(this.serverUrl)
      .map(
        (response) => {
          const factories: Factory[] = response.json();
          return factories;
        }
      ).subscribe(() => {
      this.factoriesService.getFactory(id);
    });
  }

  deleteFactory(id: string) {
    this.http.delete(this.serverUrl + id)
      .map(
        (response) => {
          return response.json();
        })
      .subscribe(
        (factory: Factory) => {
          this.factoriesService.deleteFactory(factory._id)
        })
  }

  putFactory(factory: Factory) {
    this.http.put(this.serverUrl + factory._id, factory)
      .map(
        (response) => {
          console.log(factory);
          return response.json();
        })
      .subscribe(
        (factory: Factory) => {
          this.factoriesService.editFactory(factory, factory._id)
        })

  }

  postFactory(factory: Factory) {

    this.http.post(this.serverUrl, factory)
      .map(
        (response) => {
          const factory = response.json();
          return factory;
        })
      .subscribe((factory) => {
        this.factoriesService.addFactory(factory);
      })
  }
}
