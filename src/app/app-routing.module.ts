import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutUsPageComponent} from "./pages/about-us-page/about-us-page.component";
import {SalePageComponent} from "./pages/sale-page/sale-page.component";
import {ContactPageComponent} from "./pages/contact-page/contact-page.component";
import {ShoppingCartPageComponent} from "./pages/shopping-cart-page/shopping-cart-page.component";

const routes: Routes = [
  {path: '', component: AboutUsPageComponent},
  {path: 'about', component: AboutUsPageComponent},
  {path: 'dog', component: SalePageComponent},
  {path: 'cat', component: SalePageComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: 'shopping-cart', component: ShoppingCartPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
