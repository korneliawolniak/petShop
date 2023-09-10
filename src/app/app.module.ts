import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {MatTabsModule} from '@angular/material/tabs';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './components/header/header.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from "@angular/material/icon";
import {ItemComponent} from './components/item/item.component';
import {ItemsListComponent} from './components/items-list/items-list.component';
import {SalePageComponent} from './pages/sale-page/sale-page.component';
import {AboutUsPageComponent} from './pages/about-us-page/about-us-page.component';
import {ContactPageComponent} from './pages/contact-page/contact-page.component';
import {ShoppingCartPageComponent} from './pages/shopping-cart-page/shopping-cart-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemComponent,
    ItemsListComponent,
    SalePageComponent,
    AboutUsPageComponent,
    ContactPageComponent,
    ShoppingCartPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
