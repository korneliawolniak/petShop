import {Component} from '@angular/core';
import {CurrencyPipe} from "@angular/common";
import {CartCounterComponent} from "../../../../shared/components/cart-counter/cart-counter.component";
import {MatButtonModule} from "@angular/material/button";
import {CustomerService} from "../../services/customer.service";
import {Router} from "@angular/router";
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  imports: [
    CurrencyPipe,
    CartCounterComponent,
    MatButtonModule
  ],
  standalone: true
})
export class SummaryComponent {
  public currentAmount: number = 1;

  product: Product = {
    name: 'Smycz długa',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 50,
    quantity: 1,
    src: 'assets/meat.svg'
  };

  constructor(private readonly customerService: CustomerService,
              private readonly router: Router) {
  }

  public handleQuantityChange(amount: number): void {
    this.currentAmount = amount;
  }

  public onSubmit(): void {
    this.customerService.sendProduct(this.product);
    this.router.navigate(['shopping-cart/shipping-information']);
  }

}
