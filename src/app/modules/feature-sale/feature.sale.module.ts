import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SalePageComponent} from "./pages/sale-page/sale-page.component";
import {SideNavComponent} from "./components/side-nav/side-nav.component";
import {ItemsListComponent} from "./components/items-list/items-list.component";
import {AsyncPipe} from "@angular/common";
import {RoutesPath} from "../../shared/enums/enums";

const routes: Routes = [
  {
    path: '',
    component: SalePageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: RoutesPath.DRY
      },
      {
        path: RoutesPath.DRY,
        component: SalePageComponent
      },
      {
        path: RoutesPath.WET,
        component: SalePageComponent
      },
      {
        path: RoutesPath.TREATS,
        component: SalePageComponent
      },
      {
        path: RoutesPath.COLLARS,
        component: SalePageComponent
      },
      {
        path: RoutesPath.LEASHES,
        component: SalePageComponent
      },
      {
        path: RoutesPath.TOYS,
        component: SalePageComponent
      }
    ]
  },
];

@NgModule({
  declarations: [SalePageComponent],
  imports: [
    RouterModule.forChild(routes),
    SideNavComponent,
    ItemsListComponent,
    AsyncPipe
  ]
})
export class FeatureSaleModule {

}
