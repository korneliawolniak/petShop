import {Component, Input} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {CartCounterComponent} from "../../../../shared/components/cart-counter/cart-counter.component";
import {MatButtonModule} from "@angular/material/button";
import {CurrencyPipe, NgForOf} from "@angular/common";
import {Product} from "../../../feature-shopping-cart/models/product.model";
import {CartService} from "../../../feature-shopping-cart/services/cart/cart.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  imports: [
    MatCardModule,
    CartCounterComponent,
    MatButtonModule,
    NgForOf,
    CurrencyPipe
  ],
  standalone: true
})
export class ItemComponent {
  @Input() products?: Product[] | null;
  public currentAmount: number = 1;

  constructor(private cartService: CartService) {
  }

  public handleQuantityChange(amount: number): void {
    this.currentAmount = amount;
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product, this.currentAmount);
    this.cartService.addToTotalQuantity(this.currentAmount);
  }

}
