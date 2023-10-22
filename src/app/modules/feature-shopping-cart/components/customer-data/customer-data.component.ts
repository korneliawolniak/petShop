import {Component} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {CustomerService} from "../../services/customer.service";
import {Customer} from "../../models/customer.model"
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatRadioModule} from "@angular/material/radio";
import {NgClass, NgForOf} from "@angular/common";
import {Router} from "@angular/router";

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
    NgClass
  ],
  standalone: true
})
export class CustomerDataComponent {
  public customerForm!: FormGroup;
  public deliveryOption?: string;
  public deliveries: string[] = ['Standard Shipping', 'Express Shipping', 'In-Store Pickup', 'Click and Collect'];
  public paymentMethods = [
    {name: 'VISA', image: 'visa.gif'},
    {name: 'Blik', image: 'blik.png'},
    {name: 'ING', image: 'ing.png'},
    {name: 'Credit Agricole', image: 'agricole.png'},
    {name: 'Alior', image: 'alior.png'},
    {name: 'Mbank', image: 'mbank.png'},
    {name: 'Pocztowy', image: 'pocztowy.gif'},
    {name: 'SGB', image: 'sgb.gif'},
    {name: 'Santander', image: 'santander.png'}
  ];
  public selectedPaymentMethod?: string | null = null;

  constructor(private fb: FormBuilder,
              private customerService: CustomerService,
              private router: Router) {
    this.customerForm = this.fb.group({
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


  public selectPaymentMethod(method: string) {
    this.customerForm.get('paymentMethod')?.setValue(method);
    this.selectedPaymentMethod = this.customerForm.value.paymentMethod === method ? null : method;
    this.selectedPaymentMethod = this.selectedPaymentMethod === method ? null : method;
  }

  public onSubmit() {
    const customer = new Customer(
      this.customerForm?.value.name,
      this.customerForm?.value.surname,
      this.customerForm?.value.address,
      this.customerForm?.value.zipCode,
      this.customerForm?.value.city,
      this.customerForm?.value.country,
      this.customerForm?.value.deliveryOption,
      this.customerForm?.value.paymentMethod
    );

    this.customerService.sendCustomer(customer);
    this.router.navigate(['shopping-cart/payment']);


    // this.customerService.submitProduct(product).subscribe((response) => {
    //   console.log('Product submitted successfully!', response);
    // });
  }

}
