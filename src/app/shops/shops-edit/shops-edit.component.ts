import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Bar} from "../../shared/bar.model";
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {BarService} from "../../shared/bars.service";
import {BarsStorageService} from "../../shared/bars.storage.service";
import {BeansStorageService} from "../../shared/beans.storage.service";
import {BeanService} from "../../beans/beans-list/beans.service";
import {Bean} from "../../shared/bean.model";

@Component({
  selector: 'app-shops-edit',
  templateUrl: './shops-edit.component.html',
  styleUrls: ['./shops-edit.component.css']
})
export class ShopsEditComponent implements OnInit {

id: string;
editMode = false;
barForm: FormGroup;
bar : Bar;
subscription: Subscription;
beans: Bean[];

constructor(
  private route: ActivatedRoute,
  private barService : BarService,
  private router: Router,
  private dataStorageService: BarsStorageService,
  private beansDataStorageService: BeansStorageService,
  private  beansService: BeanService) {
}

ngOnInit() {
  this.route.params
    .subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );


  this.subscription = this.beansService.beansChanged
    .subscribe((beans: Bean[]) => {
        this.beans = beans;
      }
    );

  this.beansDataStorageService.getCoffeeBeans();
  console.log(this.beans);

}

private initForm() {
  let id = '';
  let title = '';
/*  let imagePath = '';*/
  let name = '';
  let beans = [];

  if (this.editMode) {
    const bar = this.barService.getBar(this.id);
    console.log(bar);
    id = bar._id;
    name = bar.name;
    /*imagePath = bean.image_url;*/
    beans = bar.beans;


  }

  this.barForm = new FormGroup({
    '_id': new FormControl(id),
    'name': new FormControl(name, Validators.required),
    'beans': new FormControl(beans, Validators.required)

  });
}



onSubmit(form: FormGroup) {
  if (this.editMode) {
    console.log(form.value);
    this.dataStorageService.putBar(this.barForm.value);
    this.router.navigate(['/shops']);
  }

  else {

    this.dataStorageService.postBar(form.value);
    this.router.navigate(['/shops']);

    //newBean = this.beanForm.
  }
}
}
