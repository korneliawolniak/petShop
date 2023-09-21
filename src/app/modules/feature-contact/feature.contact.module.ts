import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ContactPageComponent} from "./pages/contact-page/contact-page.component";
import {FaqsListComponent} from "./components/faqs-list/faqs-list.component";
import {ContactFormComponent} from "./components/contact-form/contact-form.component";

const routes: Routes = [
  {path: '', component: ContactPageComponent},
];

@NgModule({
  declarations: [ContactPageComponent],
  imports: [
    RouterModule.forChild(routes),
    FaqsListComponent,
    ContactFormComponent
  ]
})
export class FeatureContactModule {
}
