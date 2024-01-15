import {Delivery} from "../../feature-sale/models/products.model";

export class Customer {
  constructor(
    public email: string,
    public name: string,
    public surname: number,
    public address: string,
    public zipCode: string,
    public city: string,
    public country: string,
    public deliveryOption: Delivery,
    public paymentMethod: string,
  ) {
  }
}
