import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {BeanService} from "../beans-list/beans.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {BeansStorageService} from "../../shared/beans.storage.service";
import {Bean} from "../../shared/bean.model";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-beans-information',
  templateUrl: './beans-information.component.html',
  styleUrls: ['./beans-information.component.css']
})
export class BeansInformationComponent implements OnInit, OnDestroy{

  //temporary solution
  bean: Bean;
  id: string;
  subscription: Subscription;

  constructor(private beanService: BeanService,
              private route: ActivatedRoute,
              private router: Router,
              private storageService: BeansStorageService) {}

  ngOnInit(){


    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];



          this.subscription = this.beanService.beanChanged
            .subscribe((bean: Bean) => {
                this.bean = bean;

                  console.log("id: " + bean.title);

              }
            );

          this.storageService.getCoffeeBeanById(this.id);
        }
      );

  }

  editBean() {
    this.router.navigate(['edit'], {relativeTo: this.route});

  }
  deleteBean() {
    this.storageService.deleteCoffeeBean(this.id);
    this.router.navigate(['/beans']);
  }

  ngOnDestroy () {
    this.subscription.unsubscribe();
  }

}
