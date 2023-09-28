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
    if (this.value > 1) {
      this.value -= 1;
    } else {
      this.value = 0;
    }
    this.emitQuantity();
  }

  public incrementValue(): void {
    if (this.value < 100) {
      this.value += 1;
    } else {
      this.value = 100;
    }
    this.emitQuantity();
  }

  private emitQuantity(): void {
    this.amount.emit(this.value);
  }
}
