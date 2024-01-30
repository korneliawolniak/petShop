import {Component, OnInit} from '@angular/core';
import {CurrencyPipe, NgForOf} from "@angular/common";
import {CartCounterComponent} from "../../../../shared/components/cart-counter/cart-counter.component";
import {MatButtonModule} from "@angular/material/button";
import {Router} from "@angular/router";
import {Product} from "../../models/product.model";
import {CartService} from "../../services/cart/cart.service";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  imports: [
    CurrencyPipe,
    CartCounterComponent,
    MatButtonModule,
    NgForOf
  ],
  standalone: true
})
export class SummaryComponent implements OnInit {

  public products = this.cartService.getItems();

  constructor(private readonly router: Router,
              private readonly cartService: CartService) {
  }

  public ngOnInit(): void {
    this.emitTotalQuantity();
  }

  public handleQuantityChange(amount: number, product: Product): void {
    const item = this.products?.find(item => item.product === product);
    if (item) {
      item.quantity = amount;
    }
    this.emitTotalQuantity();
  }

  public onSubmit(): void {
    this.router.navigate(['shopping-cart/shipping-information']);
  }

  private emitTotalQuantity(): void {
    const total = this.products?.reduce((sum, item) => sum + item.quantity, 0) || 0;
    this.cartService.updateTotalQuantity(total);
  }
}
