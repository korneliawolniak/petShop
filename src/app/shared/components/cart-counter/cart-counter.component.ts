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
  @Output() amount: EventEmitter<number> = new EventEmitter<number>();
  public value: number = 1;

  public decrementValue(): void {
    if (this.value === 1) return;
    this.value--
    this.emitQuantity();
  }

  public incrementValue(): void {
    if (this.value >= 100) return;
    this.value++;
    this.emitQuantity();
  }

  private emitQuantity(): void {
    this.amount.emit(this.value);
  }
}
