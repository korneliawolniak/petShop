import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customer} from "../models/customer.model";

@Injectable({
  providedIn: 'root'
})
export class CustomerApiService {
  private apiUrl = 'http://example.com/api/products';

  constructor(private readonly http: HttpClient) {
  }

  public submitProduct(customer: Customer) {
    return this.http.post(this.apiUrl, customer);
  }
}
