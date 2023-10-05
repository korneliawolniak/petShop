import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ShoppingCartPageComponent} from "./pages/shopping-cart-page/shopping-cart-page.component";
import {EmptyCartComponent} from "./components/empty-cart/empty-cart.component";
import {NgIf} from "@angular/common";

const routes: Routes = [
  {path: '', component: ShoppingCartPageComponent},
];

@NgModule({
  declarations: [ShoppingCartPageComponent],
  imports: [
    RouterModule.forChild(routes),
    EmptyCartComponent,
    NgIf
  ]
})
export class FeatureShoppingCartModule {
}
