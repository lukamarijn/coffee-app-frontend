import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BeansComponent } from './beans/beans.component';
import {AppRoutingModule} from "./app.routing-module";
import { ShopsComponent } from './shops/shops.component';
import { BeansListComponent } from './beans/beans-list/beans-list.component';
import { BeanDetailedComponent } from './beans/beans-list/bean-detailed/bean-detailed.component';
import { BeansInformationComponent } from './beans/beans-information/beans-information.component';
import {BeanService} from "./beans/beans-list/beans.service";
import {BeansStorageService} from "./shared/beans.storage.service";
import {HttpModule} from "@angular/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './beans/home/home.component';
import { BeansEditComponent } from './beans/beans-edit/beans-edit.component';
import {FactoryService} from "./shared/factory.service";
import {FactoriesStorageService} from "./shared/factories.storage.service";
import { FactoriesComponent } from './factories/factories.component';
import {FactoryListComponent} from "./factories/factory-list/factory-list.component";
import { ShopsListComponent } from './shops/shops-list/shops-list.component';
import { ShopsDetailedComponent } from './shops/shops-list/shops-detailed/shops-detailed.component';
import { ShopsEditComponent } from './shops/shops-edit/shops-edit.component';
import {BarsStorageService} from "./shared/bars.storage.service";
import {BarService} from "./shared/bars.service";
import { ShopsInformationComponent } from './shops/shops-list/shops-detailed/shops-information/shops-information.component';
import { FactoryDetailComponent } from './factories/factory-detail/factory-detail.component';
import { FactoryInformationComponent } from './factories/factory-list/factory-information/factory-information.component';
import { FactoryEditComponent } from './factories/factory-edit/factory-edit.component';
import { ConfirmDirective } from './confirm.directive';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    BeansComponent,
    ShopsComponent,
    BeansListComponent,
    BeanDetailedComponent,
    BeansInformationComponent,
    HomeComponent,
    BeansEditComponent,
    FactoriesComponent,
    FactoryListComponent,
    ShopsListComponent,
    ShopsDetailedComponent,
    ShopsEditComponent,
    ShopsInformationComponent,

    FactoryDetailComponent,
    FactoryInformationComponent,
    FactoryEditComponent,

    ConfirmDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
  ],
  providers: [BeanService, BeansStorageService,
    FactoryService, FactoriesStorageService, BarsStorageService, BarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
