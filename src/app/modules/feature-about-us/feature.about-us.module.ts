import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AboutUsPageComponent} from "./pages/about-us-page/about-us-page.component";
import {MatCardModule} from "@angular/material/card";

const routes: Routes = [
  {path: '', component: AboutUsPageComponent},
];

@NgModule({
  declarations: [AboutUsPageComponent],
  imports: [
    RouterModule.forChild(routes),
    MatCardModule
  ]
})
export class FeatureAboutUsModule {
}
