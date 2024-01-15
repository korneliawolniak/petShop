import {Injectable} from '@angular/core';
import {Customer} from "../../models/customer.model";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private productSubject = new BehaviorSubject(null);
  public product$ = this.productSubject.asObservable();
  private customerSubject = new BehaviorSubject<Customer | null>(null);
  public customer$: Observable<Customer | null> = this.customerSubject.asObservable();

  public sendProduct(data: any): void {
    this.productSubject.next(data);
  }

  public sendCustomer(data: any): void {
    this.customerSubject.next(data);
  }
}
