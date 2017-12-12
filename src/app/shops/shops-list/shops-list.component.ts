import {Component, OnDestroy, OnInit} from '@angular/core';
import {BarService} from "../../shared/bars.service";
import {Subscription} from "rxjs/Subscription";
import {Bar} from "../../shared/bar.model";
import {BarsStorageService} from "../../shared/bars.storage.service";
import {Router} from "@angular/router";
import {Bean} from "../../shared/bean.model";

@Component({
  selector: 'app-shops-list',
  templateUrl: './shops-list.component.html',
  styleUrls: ['./shops-list.component.css']
})
export class ShopsListComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  subscriptionBeans : Subscription;
  bars : Bar[];
  beans : Bean[];

  constructor(private barStorageService: BarsStorageService,
              private barService: BarService,
    private router: Router) { }

  ngOnInit() {

    this.subscription =  this.barService.barsChanged
      .subscribe((bars: Bar[])=> {
        this.bars = bars;
      });


    this.barStorageService.getBars();



  }

  onAddBar() {
    this.router.navigate(['/shops/' + '/new']);
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
