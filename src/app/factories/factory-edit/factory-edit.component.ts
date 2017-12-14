import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Factory} from "../../shared/factory.model";
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {BarService} from "../../shared/bars.service";
import {FactoryService} from "../../shared/factory.service";
import {FactoriesStorageService} from "../../shared/factories.storage.service";

@Component({
  selector: 'app-factory-edit',
  templateUrl: './factory-edit.component.html',
  styleUrls: ['./factory-edit.component.css']
})
export class FactoryEditComponent implements OnInit {

  id: string;
  area = '';
  editMode = false;
  factoryForm: FormGroup;
  factory: Factory;


  constructor(
    private route: ActivatedRoute,
    private factoryService: FactoryService,
    private router: Router,
    private dataStorageService: FactoriesStorageService){
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


  }

  private initForm() {
    let id = '';
    let imagePath = '';
    let description = '';
    let name = '';
    let city = '';

    if (this.editMode) {
      const factory = this.factoryService.getFactory(this.id);
      id = factory._id;
      name = factory.name;
      imagePath = factory.image_url;
      city = factory.city;
      description = factory.description,
      this.area = factory.description


    }

    this.factoryForm = new FormGroup({
      '_id': new FormControl(id),
      'name': new FormControl(name, Validators.required),
      'city': new FormControl(city, Validators.required),
      'description': new FormControl(description),
      'image_url': new FormControl(imagePath, Validators.required)

    });
  }



  onSubmit(form: FormGroup) {
    if (this.editMode) {

      console.log(form.value);
      this.dataStorageService.putFactory(form.value);
      this.router.navigate(['/factories']);
    }

    else {

      console.log(form.value);
      this.dataStorageService.postFactory(form.value);
      this.router.navigate(['/factories']);

      //newBean = this.beanForm.
    }
  }
}
