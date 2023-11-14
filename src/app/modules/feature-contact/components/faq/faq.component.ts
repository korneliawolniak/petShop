import {Component} from '@angular/core';
import {MatExpansionModule} from "@angular/material/expansion";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  imports: [
    MatExpansionModule
  ],
  standalone: true
})
export class FaqComponent {

}
