import {Component, OnInit} from '@angular/core';
import {MatExpansionModule} from "@angular/material/expansion";
import {FaqModel} from "../../models/faq.model";
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
export class FaqComponent implements OnInit {
  public faqs?: FaqModel[];

  ngOnInit() {
    this.faqs = faqs;
  }

}
