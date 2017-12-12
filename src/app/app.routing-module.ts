


import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {BeansComponent} from "./beans/beans.component";
import {ShopsComponent} from "./shops/shops.component";
import {BeansInformationComponent} from "./beans/beans-information/beans-information.component";
import {HomeComponent} from "./beans/home/home.component";
import {BeansEditComponent} from "./beans/beans-edit/beans-edit.component";
import {FactoriesComponent} from "./factories/factories.component";
import {ShopsInformationComponent} from "./shops/shops-list/shops-detailed/shops-information/shops-information.component";
import {ShopsEditComponent} from "./shops/shops-edit/shops-edit.component";
import {FactoryDetailComponent} from "./factories/factory-detail/factory-detail.component";
import {FactoryEditComponent} from "./factories/factory-edit/factory-edit.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/beans', pathMatch: 'full' },
  { path: 'beans', component: BeansComponent, children: [
    { path: '', component: HomeComponent },
    { path: 'new', component: BeansEditComponent },
    { path: ':id', component: BeansInformationComponent },
    { path: ':id/edit', component: BeansEditComponent }
    ]
  },
  {
    path: 'shops', component: ShopsComponent, children: [
    {path: '', component: HomeComponent},
    {path: 'new', component: ShopsEditComponent},
    {path: ':id', component: ShopsInformationComponent},
    {path: ':id/edit', component: ShopsEditComponent}
  ]
  },
  { path: 'factories', component: FactoriesComponent,  children: [
    { path: '', component: HomeComponent },
    { path: 'new', component: FactoryEditComponent },
    {path: ':id/edit', component: FactoryEditComponent},
    { path: ':id', component: FactoryDetailComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
