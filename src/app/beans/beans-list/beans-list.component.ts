import {Component, OnInit, OnDestroy, OnChanges, AfterViewInit} from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router";
import {BeansStorageService} from "../../shared/beans.storage.service";
import {Subscription} from "rxjs/Subscription";
import {BeanService} from "./beans.service";
import {Bean} from "../../shared/bean.model";

@Component({
  selector: 'app-beans-list',
  templateUrl: './beans-list.component.html',
  styleUrls: ['./beans-list.component.css']
})
export class BeansListComponent implements OnInit, OnDestroy {

  beans: Bean[];
  subscription: Subscription;

  objArray = [ { 'name':'Alles', value: "" }];
  tasteArray = [ { 'name':'Alles', value: "" }];
  typeArray = [ { 'name':'Alles', value: "" },
    /*{ 'name': "Espresso" , value: "espresso"},
    { 'name': "Cafetiere" , value: "Cafetiere"} */];
  selectedPlantation: string = "";
  selectedTaste: string = "";
  selectedType: string = "";
  name: string = '';

  constructor(private router: Router, private route: ActivatedRoute,
              private dataStorageService: BeansStorageService,
              private beanService: BeanService) { }


  ngOnInit() {


    this.subscription = this.beanService.beansChanged
      .subscribe((beans: Bean[]) => {
          this.beans = beans;


          console.log(beans);
          for (let bean of beans) {


            if(!this.objArray.find( item => item.name === bean.plantation)) {
              this.objArray.push({"name": bean.plantation, "value": bean.plantation});
            }

            if(!this.tasteArray.find( item => item.name === bean.taste)) {
              this.tasteArray.push({"name": bean.taste, "value": bean.taste});
            }

            if(!this.typeArray.find( item => item.name === bean.type)) {
              this.typeArray.push({"name": bean.type, "value": bean.type});
            }
          }
        }
      );

      this.dataStorageService.getCoffeeBeans();

  }


  onNewCoffeeBean(){
      this.router.navigate(['new'], {relativeTo: this.route});

  }

  onFilter(searchInput: HTMLInputElement) {

    console.log(this.selectedTaste)
    this.dataStorageService.getCoffeeBeanByFilter(searchInput.value,
      this.selectedPlantation,
      this.selectedTaste,
      this.selectedType);


  }



  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
