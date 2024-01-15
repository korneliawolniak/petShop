import {Component, DoCheck} from '@angular/core';
import {MatTabsModule} from "@angular/material/tabs";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {SummaryComponent} from "../summary/summary.component";
import {CustomerDataComponent} from "../customer-data/customer-data.component";
import {PaymentComponent} from "../payment/payment.component";
import {Router, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  imports: [
    MatTabsModule,
    NgClass,
    SummaryComponent,
    CustomerDataComponent,
    PaymentComponent,
    NgIf,
    RouterOutlet,
    NgForOf
  ],
  standalone: true
})
export class CartComponent implements DoCheck {

  public currentUrl?: string;
  public steps = [
    {label: 'Summary', route: 'summary'},
    {label: 'Shipping information', route: 'shipping-information'},
    {label: 'Payment', route: 'payment'},
  ];

  constructor(private readonly router: Router) {
  }

  public ngDoCheck(): void {
    const partsUrl = this.router.url.split('/')
    this.currentUrl = partsUrl[partsUrl.length - 1]
  }

  public navigateTo(path: string): void {
    this.router.navigate(['shopping-cart', path]);
  }
}
