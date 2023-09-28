import {Component} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {AppModule} from "../../../../app.module";
import {CartCounterComponent} from "../../../../shared/components/cart-counter/cart-counter.component";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  imports: [
    MatCardModule,
    AppModule,
    CartCounterComponent
  ],
  standalone: true
})
export class ItemComponent {

}
