import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {HeaderComponent} from "./components/header/header.component";
import {AppRoutingModule} from "./app-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import {MatSnackBar} from "@angular/material/snack-bar";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    HeaderComponent,
    AppRoutingModule,
    NoopAnimationsModule,
  ],
  providers: [MatSnackBar],
  bootstrap: [AppComponent]
})
export class AppModule {
}
