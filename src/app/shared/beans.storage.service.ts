import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import 'rxjs/Rx';
import {Bean} from "./bean.model";
import {Http} from "@angular/http";

import {Observable} from "rxjs/Observable";
import {BeanService} from "../beans/beans-list/beans.service";


@Injectable()

export class BeansStorageService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private serverUrl = environment.serverUrl + '/beans/'; // URL to web api

  constructor(private http: Http, private beansService: BeanService) {
  }

  getCoffeeBeans() {
    this.http.get(this.serverUrl)
      .map(
        (response) => {
          return response.json();
        }
      ).subscribe(
      (beans: Bean[]) => {
        this.beansService.setBeans(beans)
      }
    );
  }

  getCoffeeBeanByFilter(title: string, nameOfPlantation: string, taste: string, type: string) {


    console.log(environment.serverUrl + "/beans?title=" + title);
    this.http.get(environment.serverUrl + "/beans?title=" + title + "&name=" + nameOfPlantation +
      "&taste=" + taste + "&type=" + type)
      .map(
        (response) => {
          return response.json();
        }).subscribe(
      (beans) => {
        this.beansService.setBeans(beans);
      })
  }

  getCoffeeBeanById(id: string) {

    this.http.get(this.serverUrl)
      .map(
        (response) => {
          const beans: Bean[] = response.json();
          console.log(beans);
          return beans;
        }
      ).subscribe(() => {
      this.beansService.getBean(id);
    });
  }


  postCoffeeBean(bean: Bean) {

    this.http.post(this.serverUrl, bean)
      .map(
        (response) => {
          const bean = response.json();
          console.log(bean);
          return bean;
        })
      .subscribe((bean) => {
        this.beansService.addBean(bean);
      })
  }

  deleteCoffeeBean(id: string) {
    this.http.delete(this.serverUrl + id)
      .map(
        (response) => {
          return response.json();
        })
      .subscribe(
        (bean: Bean) => {
          this.beansService.deleteBean(bean._id);
        })
  }

  putCoffeeBean(bean: Bean) {
    this.http.put(this.serverUrl + bean._id, bean)
      .map(
        (response) => {
          return response.json();})
      .subscribe(
        (bean) => {
          console.log(bean);
          this.beansService.editBean(bean, bean._id)
        })

  }
}
