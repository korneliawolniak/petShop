import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SalePageComponent} from "./pages/sale-page/sale-page.component";
import {SideNavComponent} from "./components/side-nav/side-nav.component";
import {ItemsListComponent} from "./components/items-list/items-list.component";
import {AsyncPipe} from "@angular/common";

const routes: Routes = [
  {
    path: '',
    component: SalePageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dry-food'
      },
      {
        path: 'dry-food',
        component: SalePageComponent
      },
      {
        path: 'wet-food',
        component: SalePageComponent
      },
      {
        path: 'treats',
        component: SalePageComponent
      },
      {
        path: 'collars',
        component: SalePageComponent
      },
      {
        path: 'leashes',
        component: SalePageComponent
      },
      {
        path: 'toys',
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
