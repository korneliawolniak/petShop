import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HeaderComponent} from "./components/header/header.component";
import {AppRoutingModule} from "./app-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import {MatSnackBar} from "@angular/material/snack-bar";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HeaderComponent,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule
  ],
  providers: [MatSnackBar],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
