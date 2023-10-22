import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customer} from "../models/customer.model";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private productSubject = new BehaviorSubject(null);
  public product$ = this.productSubject.asObservable();
  private customerSubject = new BehaviorSubject(null);
  public customer$ = this.customerSubject.asObservable();

  constructor(private http: HttpClient) {
  }

  public submitProduct(customer: Customer) {
    const apiUrl = 'http://example.com/api/products';
    return this.http.post(apiUrl, customer);
  }

  public sendProduct(data: any) {
    this.productSubject.next(data);
  }

  public sendCustomer(data: any) {
    this.customerSubject.next(data);
  }
}
