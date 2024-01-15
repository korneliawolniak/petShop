import {Injectable} from '@angular/core';
import {Customer} from "../../models/customer.model";
import {BehaviorSubject, Observable} from "rxjs";
import {CustomerApiService} from "../customer-api/customer-api.service";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private productSubject = new BehaviorSubject(null);
  public product$ = this.productSubject.asObservable();
  private customerSubject = new BehaviorSubject<Customer | null>(null);
  public customer$: Observable<Customer | null> = this.customerSubject.asObservable();

  constructor(private readonly customerApiService: CustomerApiService) {
  }

  public submitProduct(customer: Customer) {
    this.customerApiService.submitProduct(customer);
  }

  public sendProduct(data: any) {
    this.productSubject.next(data);
  }

  public sendCustomer(data: any) {
    this.customerSubject.next(data);
  }
}
