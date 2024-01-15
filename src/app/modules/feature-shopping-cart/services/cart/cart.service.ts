import {Injectable} from '@angular/core';
import {Product} from "../../models/product.model";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: { product: Product, quantity: number }[] = [];
  private totalQuantitySource = new BehaviorSubject<number>(0);
  totalQuantity$ = this.totalQuantitySource.asObservable();

  addToCart(product: Product, quantity: number): void {
    this.items.push({product, quantity});
  }

  getItems(): { product: Product; quantity: number }[] {
    return this.items;
  }

  updateTotalQuantity(quantity: number): void {
    this.totalQuantitySource.next(quantity);
  }

  addToTotalQuantity(quantityToAdd: number): void {
    const currentTotal = this.totalQuantitySource.getValue();
    this.totalQuantitySource.next(currentTotal + quantityToAdd);
  }

  resetTotalQuantity(): void {
    this.totalQuantitySource.next(0);
  }
}
