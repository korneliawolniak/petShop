import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ShoppingCartPageComponent} from "./pages/shopping-cart-page/shopping-cart-page.component";

const routes: Routes = [
  {path: '', component: ShoppingCartPageComponent},
];

@NgModule({
  declarations: [ShoppingCartPageComponent],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class FeatureShoppingCartModule {
}
