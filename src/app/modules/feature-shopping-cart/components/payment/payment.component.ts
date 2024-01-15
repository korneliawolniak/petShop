import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../services/customer/customer.service";
import {Customer} from "../../models/customer.model";
import {AsyncPipe, CurrencyPipe, NgForOf, NgIf} from "@angular/common";
import {MatTableModule} from "@angular/material/table";
import {CartCounterComponent} from "../../../../shared/components/cart-counter/cart-counter.component";
import {Product} from "../../models/product.model";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {Observable} from "rxjs";
import {CartService} from "../../services/cart/cart.service";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  imports: [
    AsyncPipe,
    NgForOf,
    MatTableModule,
    CartCounterComponent,
    CurrencyPipe,
    NgIf,
    MatButtonModule,
    RouterLink
  ],
  standalone: true
})
export class PaymentComponent implements OnInit {

  public product?: Product;
  public customer?: Customer | null;
  public product$?: Observable<Product[] | null>
  public customer$?: Observable<Customer | null>;
  public totalProductsPrice?: number;
  public totalPrice?: number;

  constructor(private readonly customerService: CustomerService,
              private readonly cartService: CartService) {
  }

  public ngOnInit(): void {
    this.product$ = this.customerService.product$
    this.customer$ = this.customerService.customer$
    this.calculateTotalPrices();
  }

  public pay(): void {
    this.cartService.resetTotalQuantity();
  }

  private calculateTotalPrices(): void {
    this.product$?.subscribe(products => {
      this.totalProductsPrice = products?.reduce((acc, product) => acc + product.price * product.quantity, 0);
      this.calculateTotalPriceIncludingDelivery();
    });
  }

  private calculateTotalPriceIncludingDelivery(): void {
    this.customer$?.subscribe(customer => {
      if (customer && customer.deliveryOption) {
        this.totalPrice = (this.totalProductsPrice ?? 0) + parseFloat(customer.deliveryOption.price);
      } else {
        this.totalPrice = this.totalProductsPrice;
      }
    });
  }
}
