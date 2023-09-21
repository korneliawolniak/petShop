import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SalePageComponent} from "./pages/sale-page/sale-page.component";
import {SideNavComponent} from "./components/side-nav/side-nav.component";

const routes: Routes = [
  {path: '', component: SalePageComponent},
];

@NgModule({
  declarations: [SalePageComponent],
  imports: [
    RouterModule.forChild(routes),
    SideNavComponent
  ]
})
export class FeatureSaleModule {

}
