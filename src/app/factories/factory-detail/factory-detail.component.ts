import {Component, Input, OnInit} from '@angular/core';
import {Factory} from "../../shared/factory.model";
import {FactoryService} from "../../shared/factory.service";
import {FactoriesStorageService} from "../../shared/factories.storage.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {BeanService} from "../../beans/beans-list/beans.service";
import {Bean} from "../../shared/bean.model";
import {BeansStorageService} from "../../shared/beans.storage.service";

@Component({
  selector: 'app-factory-detail',
  templateUrl: './factory-detail.component.html',
  styleUrls: ['./factory-detail.component.css']
})
export class FactoryDetailComponent implements OnInit {

  id: string;
  subscription: Subscription;
  beansSubscription: Subscription;
  factory: Factory = new Factory('test', 'test', 'test', 'test');
  beans: Bean[];
  message = false;

  constructor(private factoryService: FactoryService,
              private route: ActivatedRoute,
              private router: Router,
              private beansStorageService: BeansStorageService,
              private storageService: FactoriesStorageService,
              private beansService: BeanService) {}

  ngOnInit() {

    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];

          this.storageService.getFactoryById(this.id);

          this.subscription = this.factoryService.factoryChanged
            .subscribe((factory: Factory) => {
                this.factory = factory;
                console.log(this.factory);
                this.message = false;

              }
            );
        }
      );

      this.beansSubscription = this.beansService.beansChanged
        .subscribe((beans: Bean[]) => {
          this.beans = beans;
          console.log(this.beans);
        })

    this.beansStorageService.getCoffeeBeans();

  }


  checkIfFactoryIsUsed() {

    const index = this.beans.findIndex( x => x.roasting_house._id == this.id)
    if (index == -1) {
      return true;
    }
    else {
        return false;
    }

  }
  deleteFactory() {

    const deletable =  this.checkIfFactoryIsUsed();
    console.log(deletable);
    if (deletable == true) {
      this.storageService.deleteFactory(this.id)
    }
    else {
      this.message = true;

    }
  }

  editFactory() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
}
