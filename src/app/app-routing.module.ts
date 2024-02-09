import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RoutesPath} from "./shared/enums/enums";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/feature-about-us/feature.about-us.module').then(m => m.FeatureAboutUsModule)
  },
  {
    path: RoutesPath.DOG,
    loadChildren: () => import('./modules/feature-sale/feature.sale.module').then(m => m.FeatureSaleModule)
  },
  {
    path: RoutesPath.CAT,
    loadChildren: () => import('./modules/feature-sale/feature.sale.module').then(m => m.FeatureSaleModule)
  },
  {
    path: RoutesPath.CONTACT,
    loadChildren: () => import('./modules/feature-contact/feature.contact.module').then(m => m.FeatureContactModule)
  },
  {
    path: RoutesPath.CART,
    loadChildren: () => import('./modules/feature-shopping-cart/feature.shopping-cart.module').then(m => m.FeatureShoppingCartModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
