import {Injectable} from '@angular/core';
import {Customer} from "../../models/customer.model";
import {Product} from "../../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  public products: Product[] = []
  public customer!: Customer;

  public setCustomer(customer: Customer): void {
    this.customer = customer
  }

  public getCustomer(): Customer {
    return this.customer
  }

}
