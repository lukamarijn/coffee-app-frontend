import {Component, Input, OnInit} from '@angular/core';
import {Bean} from "../../../shared/bean.model";

@Component({
  selector: 'app-bean-detailed',
  templateUrl: './bean-detailed.component.html',
  styleUrls: ['./bean-detailed.component.css']
})
export class BeanDetailedComponent implements OnInit {

  @Input() bean : Bean;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }


}
