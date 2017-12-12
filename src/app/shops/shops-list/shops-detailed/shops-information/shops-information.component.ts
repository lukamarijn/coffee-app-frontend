import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {Bean} from "../../../../shared/bean.model";
import {BarService} from "../../../../shared/bars.service";
import {BarsStorageService} from "../../../../shared/bars.storage.service";
import {Bar} from "../../../../shared/bar.model";

@Component({
  selector: 'app-shops-information',
  templateUrl: './shops-information.component.html',
  styleUrls: ['./shops-information.component.css']
})
export class ShopsInformationComponent implements OnInit {

  @Input() bar  : Bar;
  @Output() deleteBar = new EventEmitter<string>();
  @Output() editBar = new EventEmitter<Bar>();
  subscription: Subscription;
  beans : Bean[];

  constructor(private barService: BarService, private barStorageService: BarsStorageService) { }


  ngOnInit() {
    console.log(this.bar.beans);
  }

  onDeleteBar() {
    this.deleteBar.emit(this.bar._id);
  }



}
