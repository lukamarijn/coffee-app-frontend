import {Bar} from "./bar.model";
import {Injectable} from "@angular/core";
import { Subject } from 'rxjs/Subject';
import {Bean} from "./bean.model";

@Injectable()
export class BarService {

  barsChanged = new Subject<Bar[]>();
  beanshanged = new Subject<Bean[]>();
  barChanged = new Subject<Bar>();
  private bars: Bar[] ;
  private bar: Bar;

  private beans: Bean[];

  constructor() {}

  setBars(bars: Bar[]) {
  this.bars = bars;
  this.barsChanged.next(this.bars.slice());
}
  setBeans(beans: Bean[]) {
    this.beans = beans;
    this.beanshanged.next(this.beans.slice())
  }

  getBar(id: string) {
    const index = this.bars.findIndex(x => x._id == id);
    console.log(this.bars);
    this.bar = this.bars[index];
    this.barChanged.next(this.bar);
    return this.bar;
  }


  editBar(bar: Bar, id: string) {
    const index = this.bars.findIndex(x => x._id == id);
    this.bars[index] = bar;
    this.barsChanged.next(this.bars.slice());
  }

  addBar(bar: Bar) {
    console.log(bar)
    this.bars.push(bar)
    this.barsChanged.next(this.bars.slice());
  }

  deleteBar(id: string) {
    const index = this.bars.findIndex(x => x._id == id);
    this.bars.splice(index, 1);
    this.barsChanged.next(this.bars.slice());
  }
}
