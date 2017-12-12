import {Component, Input, OnInit} from '@angular/core';
import {Factory} from "../../../shared/factory.model";

@Component({
  selector: 'app-factory-information',
  templateUrl: './factory-information.component.html',
  styleUrls: ['./factory-information.component.css']
})
export class FactoryInformationComponent implements OnInit {

  @Input() factory : Factory;

  constructor() { }

  ngOnInit() {
  }

}
