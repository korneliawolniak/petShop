import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../services/customer/customer.service";
import {AsyncPipe, CurrencyPipe, NgForOf, NgIf} from "@angular/common";
import {MatTableModule} from "@angular/material/table";
import {CartCounterComponent} from "../../../../shared/components/cart-counter/cart-counter.component";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";
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

  public products = this.cartService.getItems();
  public customer = this.customerService.getCustomer();
  public totalProductsPrice?: number;
  public totalPrice?: number;

  constructor(private readonly customerService: CustomerService,
              private readonly cartService: CartService) {
  }

  public ngOnInit(): void {
    this.calculateTotalPrices();
  }

  public pay(): void {
    this.cartService.resetTotalQuantity();
    this.cartService.resetItems();
  }

  private calculateTotalPrices(): void {
    this.products?.forEach(product => {
      this.totalProductsPrice = product.product.price * product.quantity
    })
    this.totalPrice = this.totalProductsPrice! + this.customer!.deliveryOption.price
  }
}
