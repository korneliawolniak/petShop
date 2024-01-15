import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../services/customer/customer.service";
import {Observable} from "rxjs";
import {Customer} from "../../models/customer.model";

@Component({
  selector: 'app-confirm-page',
  templateUrl: './confirm-page.component.html',
  styleUrls: ['./confirm-page.component.scss']
})
export class ConfirmPageComponent implements OnInit {
  public email?: string;
  public oderNumber?: string;
  public customer$?: Observable<Customer | null>;

  constructor(private readonly customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.generateOrderNumber();
    this.customer$ = this.customerService.customer$
  }

  private generateOrderNumber(): void {
    const timestamp = new Date().getTime();
    this.oderNumber = `${timestamp}`;
  }
}
