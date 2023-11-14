import {Component} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {CartCounterComponent} from "../../../../shared/components/cart-counter/cart-counter.component";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  imports: [
    MatCardModule,
    CartCounterComponent,
    MatButtonModule
  ],
  standalone: true
})
export class ItemComponent {
  public currentAmount: number = 1;

  public handleQuantityChange(amount: number): void {
    this.currentAmount = amount;
  }

}
