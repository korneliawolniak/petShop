import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ShoppingCartPageComponent} from "./pages/shopping-cart-page/shopping-cart-page.component";
import {EmptyCartComponent} from "./components/empty-cart/empty-cart.component";
import {NgIf} from "@angular/common";
import {CartComponent} from './components/cart/cart.component';
import {SummaryComponent} from './components/summary/summary.component';
import {CustomerDataComponent} from './components/customer-data/customer-data.component';
import {PaymentComponent} from './components/payment/payment.component';

const routes: Routes = [
  {
    path: '',
    component: ShoppingCartPageComponent,
    children: [
      {path: '', redirectTo: 'summary', pathMatch: 'full'},
      {path: 'summary', component: SummaryComponent},
      {path: 'shipping-information', component: CustomerDataComponent},
      {path: 'payment', component: PaymentComponent},
    ]
  },
];

@NgModule({
  declarations: [ShoppingCartPageComponent,],
  imports: [
    RouterModule.forChild(routes),
    NgIf,
    EmptyCartComponent,
    CartComponent,
    SummaryComponent,
    CustomerDataComponent,
    PaymentComponent
  ]
})
export class FeatureShoppingCartModule {
}
