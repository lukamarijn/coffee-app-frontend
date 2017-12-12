import {BarService} from "./bars.service";
import {Bar} from "./bar.model";
import {Http} from "@angular/http";
import {environment} from "../../environments/environment";
import {Injectable} from "@angular/core";
import {Bean} from "./bean.model";


@Injectable()

export class BarsStorageService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private serverUrl = environment.serverUrl + '/bars/'; // URL to web api

  constructor(private http: Http, private barService: BarService) {
  }

  getBars() {
    this.http.get(this.serverUrl)
      .map(
        (response) => {
          const bars: Bar[] = response.json();
          return bars;
        }
      ).subscribe(
      (bars: Bar[]) => {
        this.barService.setBars(bars)
      }
    );
  }

    getBeans(id: string) {
      this.http.get(this.serverUrl + id + "/beans" )
        .map(
          (response) => {
            const beans: Bean[] = response.json();
            return beans;
          }
        ).subscribe(
        (beans: Bean[]) => {
          this.barService.setBeans(beans);
        }
      );
    }

  deleteBar(id: string) {
    this.http.delete(this.serverUrl + id)
      .map(
        (response) => {
          return response.json();
        })
      .subscribe(
        (bar: Bar) => {
          this.barService.deleteBar(bar._id);
        })
  }

  putBar(bar: Bar) {
    this.http.put(this.serverUrl + bar._id, bar)
      .map(
        (response) => {
          return response.json();
        })
      .subscribe(
        (bar: Bar) => {
          this.barService.editBar(bar, bar._id)
        })

  }
  postBar(bar: Bar) {

    this.http.post(this.serverUrl,bar)
      .map(
        (response) => {
          const bar = response.json();
          console.log(bar)
          return bar;
        })
      .subscribe((bar) => {
        this.barService.addBar(bar);
      })
  }

  }

