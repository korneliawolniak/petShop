import {Component} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-empty-cart',
  templateUrl: './empty-cart.component.html',
  styleUrls: ['./empty-cart.component.scss'],
  imports: [
    MatButtonModule,
    RouterLink
  ],
  standalone: true
})
export class EmptyCartComponent {

}
