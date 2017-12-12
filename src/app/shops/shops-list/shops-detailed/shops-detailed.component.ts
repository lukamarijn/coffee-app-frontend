import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Bar} from "../../../shared/bar.model";
import {BarService} from "../../../shared/bars.service";
import {BarsStorageService} from "../../../shared/bars.storage.service";
import {Subscription} from "rxjs/Subscription";
import {Bean} from "../../../shared/bean.model";
import {ActivatedRoute, Router, RouterLinkActive} from "@angular/router";
import {BeansStorageService} from "../../../shared/beans.storage.service";
import {BeanService} from "../../../beans/beans-list/beans.service";

@Component({
  selector: 'app-shops-detailed',
  templateUrl: './shops-detailed.component.html',
  styleUrls: ['./shops-detailed.component.css']
})
export class ShopsDetailedComponent implements OnInit {

  @Input() bar: Bar;
  @Input() index: number;
  beans : Bean[];


  constructor(private router: Router, private barStorageService: BarsStorageService) { }

  ngOnInit() {

}
  onEdit($event) {
    this.router.navigate(['/shops/' + $event + '/edit']);
  }

  onDelete($event) {
    this.barStorageService.deleteBar($event);
    this.router.navigate(['/shops']);
  }

}
