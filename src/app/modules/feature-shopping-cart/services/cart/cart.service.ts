import {Injectable} from '@angular/core';
import {Product} from "../../models/product.model";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: { product: Product, quantity: number }[] = [];
  private totalQuantitySource = new BehaviorSubject<number>(0);
  public totalQuantity$ = this.totalQuantitySource.asObservable();

  public addToCart(product: Product, quantity: number): void {
    const existingItem = this.items.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({product, quantity});
    }
  }

  public getItems(): { product: Product; quantity: number }[] {
    return this.items;
  }

  public resetItems(): void {
    this.items = [];
  }

  public updateTotalQuantity(quantity: number): void {
    this.totalQuantitySource.next(quantity);
  }

  public addToTotalQuantity(quantityToAdd: number): void {
    const currentTotal = this.totalQuantitySource.getValue();
    this.totalQuantitySource.next(currentTotal + quantityToAdd);
  }

  public resetTotalQuantity(): void {
    this.totalQuantitySource.next(0);
  }
}
