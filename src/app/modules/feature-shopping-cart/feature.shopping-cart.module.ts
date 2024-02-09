import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ShoppingCartPageComponent} from "./pages/shopping-cart-page/shopping-cart-page.component";
import {EmptyCartComponent} from "./components/empty-cart/empty-cart.component";
import {AsyncPipe, NgIf} from "@angular/common";
import {CartComponent} from './components/cart/cart.component';
import {SummaryComponent} from './components/summary/summary.component';
import {CustomerDataComponent} from './components/customer-data/customer-data.component';
import {PaymentComponent} from './components/payment/payment.component';
import {RoutesPath} from "../../shared/enums/enums";

const routes: Routes = [
  {
    path: '',
    component: ShoppingCartPageComponent,
    children: [
      {path: '', redirectTo: RoutesPath.SUMMARY, pathMatch: 'full'},
      {path: RoutesPath.SUMMARY, component: SummaryComponent},
      {path: RoutesPath.SHIPPING, component: CustomerDataComponent},
      {path: RoutesPath.PAYMENT, component: PaymentComponent}
    ]
  },
];

@NgModule({
  declarations: [ShoppingCartPageComponent],
  imports: [
    RouterModule.forChild(routes),
    NgIf,
    EmptyCartComponent,
    CartComponent,
    SummaryComponent,
    CustomerDataComponent,
    PaymentComponent,
    AsyncPipe
  ]
})
export class FeatureShoppingCartModule {
}
