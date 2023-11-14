import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../services/customer/customer.service";
import {Customer} from "../../models/customer.model";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  standalone: true
})
export class PaymentComponent implements OnInit {

  public product: any;
  public customer?: Customer | null;

  constructor(private readonly customerService: CustomerService) {
  }

  public ngOnInit(): void {
    this.customerService.product$.subscribe(data => this.product = data);
    this.customerService.customer$.subscribe(data => this.customer = data);
  }

}
