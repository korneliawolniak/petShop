import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-cart-counter',
  templateUrl: './cart-counter.component.html',
  styleUrls: ['./cart-counter.component.scss'],
  imports: [
    FormsModule
  ],
  standalone: true
})
export class CartCounterComponent {
  public value: number = 1;
  @Output() amount: EventEmitter<number> = new EventEmitter<number>();
  private unitPrice: number = 30;

  get totalPrice(): number {
    return this.value * this.unitPrice;
  }

  public decrementValue(): void {
    this.value = this.value > 1 ? this.value - 1 : 0;
    this.emitQuantity();
  }

  public incrementValue(): void {
    this.value = this.value < 100 ? this.value + 1 : 100;
    this.emitQuantity();
  }

  private emitQuantity(): void {
    this.amount.emit(this.value);
  }
}
