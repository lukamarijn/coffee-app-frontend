import {Component, OnDestroy, OnInit} from '@angular/core';
import {Factory} from "../../shared/factory.model";
import {FactoriesStorageService} from "../../shared/factories.storage.service";
import {FactoryService} from "../../shared/factory.service";
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-factory-list',
  templateUrl: './factory-list.component.html',
  styleUrls: ['./factory-list.component.css']
})
export class FactoryListComponent implements OnInit , OnDestroy{

  subscription: Subscription;
  factories : Factory[];
  constructor(private factoryStorageService: FactoriesStorageService,
    private factoryService: FactoryService, private router: Router,
  private route: ActivatedRoute) { }

ngOnInit() {

    this.subscription =  this.factoryService.factoriesChanged
      .subscribe((factories: Factory[])=> {
        this.factories = factories;
      });

    this.factoryStorageService.getFactories();


  }

  onNewFactory(){
    this.router.navigate(['new'], {relativeTo: this.route});

  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
