import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ShoppingCartPageComponent} from "./pages/shopping-cart-page/shopping-cart-page.component";
import {EmptyCartComponent} from "./components/empty-cart/empty-cart.component";
import {AsyncPipe, NgIf} from "@angular/common";
import {CartComponent} from './components/cart/cart.component';
import {SummaryComponent} from './components/summary/summary.component';
import {CustomerDataComponent} from './components/customer-data/customer-data.component';
import {PaymentComponent} from './components/payment/payment.component';
import {ConfirmPageComponent} from './pages/confirm-page/confirm-page.component';

const routes: Routes = [
  {
    path: '',
    component: ShoppingCartPageComponent,
    children: [
      {path: '', redirectTo: 'summary', pathMatch: 'full'},
      {path: 'summary', component: SummaryComponent},
      {path: 'shipping-information', component: CustomerDataComponent},
      {path: 'payment', component: PaymentComponent},
      {path: 'confirm', component: ConfirmPageComponent},
    ]
  },
];

@NgModule({
  declarations: [ShoppingCartPageComponent, ConfirmPageComponent,],
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
