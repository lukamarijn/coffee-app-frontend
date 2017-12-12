import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {BeansStorageService} from "../../shared/beans.storage.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {BeanService} from "../beans-list/beans.service";
import {Subscription} from "rxjs/Subscription";
import {Bean} from "../../shared/bean.model";
import {Factory} from "../../shared/factory.model";
import {FactoriesStorageService} from "../../shared/factories.storage.service";
import {FactoryService} from "../../shared/factory.service";

@Component({
  selector: 'app-beans-edit',
  templateUrl: './beans-edit.component.html',
  styleUrls: ['./beans-edit.component.css']
})
export class BeansEditComponent implements OnInit {

  id: string;
  editMode = false;
  beanForm: FormGroup;
  bean : Bean;
  subscription: Subscription;

  factories : Factory[] =
    [
      new Factory("Branderij1", "1"),
      new Factory("Branderij2", "2")
    ];

  //toepassen databinding!!
  tasteArray = [ { 'name':'Zoet', value: "zoet" },
    { 'name': "Bloemig" , value: "bloemig"},
    { 'name': "Zuur" , value: "zuur"},
    { 'name': "Kruidig" , value: "kruidig"},
    { 'name': "Mild" , value: "mild"}];
  selectedTaste : string = "";

  typeArray = [ { 'name':'Espresso', value: "espresso" },
    { 'name': "Cafetiere" , value: "filter"},
    { 'name': "Filter" , value: "zoet"},
 ];

  constructor(
    private route: ActivatedRoute,
    private beansService : BeanService,
    private router: Router,
     private dataStorageService: BeansStorageService,
    private factoryDataStorageService: FactoriesStorageService,
  private  factoryService: FactoryService) {
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


    this.subscription = this.factoryService.factoriesChanged
      .subscribe((factories: Factory[]) => {
          this.factories = factories;
        }
      );

    this.factoryDataStorageService.getFactories();
    console.log(this.factories);

  }

  private initForm() {
    let id = '';
    let title = '';
    let imagePath = '';
    let large_imagepath = '';
    let roasting_house = '';
    let taste = '';
    let type = '';
    let plantation = '';
    let country = '';

    if (this.editMode) {
      const bean = this.beansService.getBean(this.id);
      console.log(bean);
      id = bean._id;
      title = bean.title;
      imagePath = bean.image_url;
      large_imagepath = bean.large_image_url;
      roasting_house = bean.factory_id;
      taste = bean.taste;
      plantation = bean.plantation;
      country = bean.country;
      type = bean.type;


        }

    this.beanForm = new FormGroup({
      '_id': new FormControl(id),
      'title': new FormControl(title, Validators.required),
      'image_url': new FormControl(imagePath, Validators.required),
      'large_image_url': new FormControl(large_imagepath, Validators.required),
      'roasting_house': new FormControl(roasting_house, Validators.required),
      'taste': new FormControl(taste, Validators.required),
      'type': new FormControl(type, Validators.required),
      'country': new FormControl(country,  Validators.required),
      'plantation': new FormControl(plantation,  Validators.required),

    });
  }



  onSubmit() {
    if (this.editMode) {
      console.log(this.beanForm.value);
      this.dataStorageService.putCoffeeBean(this.beanForm.value);
      this.router.navigate(['/beans']);
    }

    else {
      const title = this.beanForm.value.title;
      const largeImage = this.beanForm.value.imagePathLarge;
      const factoryId =this.beanForm.value.roasting_house;
      const smallImage = this.beanForm.value.imagePath;
      const taste = this.beanForm.value.taste;
      const type = this.beanForm.value.type;
      const plantation = this.beanForm.value.plantation;
      const country = this.beanForm.value.country;

    /*  const newBean = new Bean(title, smallImage, largeImage, factoryId); */


     this.dataStorageService.postCoffeeBean(this.beanForm.value);
      this.router.navigate(['/beans']);

      //newBean = this.beanForm.
    }

  }
}
