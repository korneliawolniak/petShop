import {Component} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {CustomerService} from "../../services/customer/customer.service";
import {Customer} from "../../models/customer.model"
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatRadioModule} from "@angular/material/radio";
import {CurrencyPipe, NgClass, NgForOf} from "@angular/common";
import {Router} from "@angular/router";
import {Delivery} from "../../../feature-sale/models/products.model";
import {paymentMethods} from "../../mocks/payments.mocks";
import {deliveries} from "../../mocks/deliveries.mocks";
import {RoutesPath} from "../../../../shared/enums/enums";

@Component({
  selector: 'app-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls: ['./customer-data.component.scss'],
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatRadioModule,
    FormsModule,
    NgForOf,
    NgClass,
    CurrencyPipe
  ],
  standalone: true
})
export class CustomerDataComponent {
  public customerForm!: FormGroup;
  public deliveryOption?: string;
  public deliveries: Delivery[] = deliveries;
  public paymentMethods = paymentMethods;
  public selectedPaymentMethod?: string = '';

  constructor(private readonly fb: FormBuilder,
              private readonly customerService: CustomerService,
              private readonly router: Router) {
    this.customerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      address: ['', Validators.required],
      zipCode: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      deliveryOption: ['', Validators.required],
      paymentMethod: [null, Validators.required]
    });
  }

  public selectPaymentMethod(method: string): void {
    this.customerForm.get('paymentMethod')?.setValue(method);
    this.selectedPaymentMethod = this.selectedPaymentMethod === method ? '' : method;
  }

  public onSubmit(): void {
    const customer = new Customer(
      this.customerForm?.value.email,
      this.customerForm?.value.name,
      this.customerForm?.value.surname,
      this.customerForm?.value.address,
      this.customerForm?.value.zipCode,
      this.customerForm?.value.city,
      this.customerForm?.value.country,
      this.customerForm?.value.deliveryOption,
      this.customerForm?.value.paymentMethod
    );
    this.customerService.setCustomer(customer);
    this.router.navigate([RoutesPath.CART + '/' + RoutesPath.PAYMENT]);
  }
}
