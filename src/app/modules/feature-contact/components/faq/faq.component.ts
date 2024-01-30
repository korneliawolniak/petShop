import {Component} from '@angular/core';
import {MatExpansionModule} from "@angular/material/expansion";
import {faqs} from "../../../../shared/mocks/faq.mocks";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  imports: [
    MatExpansionModule,
    NgForOf
  ],
  standalone: true
})
export class FaqComponent {
  public faqs = faqs;
}
