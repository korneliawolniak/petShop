import {Component, Input} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {CartCounterComponent} from "../../../../shared/components/cart-counter/cart-counter.component";
import {MatButtonModule} from "@angular/material/button";
import {NgForOf} from "@angular/common";
import {Product} from "../../../feature-shopping-cart/models/product.model";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  imports: [
    MatCardModule,
    CartCounterComponent,
    MatButtonModule,
    NgForOf
  ],
  standalone: true
})
export class ItemComponent {
  @Input() products?: Product[] | null;
  public currentAmount: number = 1;

  public handleQuantityChange(amount: number): void {
    this.currentAmount = amount;
  }

}
