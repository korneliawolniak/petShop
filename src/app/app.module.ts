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
import {FaqComponent} from './components/faq/faq.component';
import {FaqsListComponent} from './components/faqs-list/faqs-list.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {ContactFormComponent} from './components/contact-form/contact-form.component';
import {MatInputModule} from "@angular/material/input";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EmailInputComponent} from './components/email-input/email-input.component';
import {MessageInputComponent} from './components/message-input/message-input.component';
import {MatButtonModule} from "@angular/material/button";
import {AlertComponent} from './components/alert/alert.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {SideNavComponent} from './components/side-nav/side-nav.component';
import {MatSidenavModule} from "@angular/material/sidenav";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemComponent,
    ItemsListComponent,
    SalePageComponent,
    AboutUsPageComponent,
    ContactPageComponent,
    ShoppingCartPageComponent,
    FaqComponent,
    FaqsListComponent,
    ContactFormComponent,
    EmailInputComponent,
    MessageInputComponent,
    AlertComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatIconModule,
    MatExpansionModule,
    MatInputModule,
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSnackBarModule,
    FormsModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
