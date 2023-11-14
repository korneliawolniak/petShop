import {Component} from '@angular/core';
import {FaqComponent} from "../faq/faq.component";

@Component({
  selector: 'app-faqs-list',
  templateUrl: './faqs-list.component.html',
  styleUrls: ['./faqs-list.component.scss'],
  imports: [
    FaqComponent
  ],
  standalone: true
})
export class FaqsListComponent {

}
