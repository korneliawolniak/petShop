export class Customer {
  constructor(
    public name: string,
    public surname: number,
    public address: string,
    public zipCode: string,
    public city: string,
    public country: string,
    public deliveryOption: string,
    public paymentMethod: string,
  ) {
  }
}
