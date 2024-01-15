import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
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
export class CartCounterComponent implements OnChanges {
  @Output() amount: EventEmitter<number> = new EventEmitter<number>();
  @Input() maxValue = 100;
  @Input() quantity?: number;
  public value: number = 1;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['quantity']) {
      const newQuantity = changes['quantity'].currentValue;
      if (newQuantity != null) {
        this.value = newQuantity;
      }
    }
  }


  public decrementValue(): void {
    if (this.value === 1) return;
    this.value--
    this.emitQuantity();
  }

  public incrementValue(): void {
    if (this.value < this.maxValue) {
      this.value++;
      this.emitQuantity();
    }
  }

  private emitQuantity(): void {
    this.amount.emit(this.value);
  }
}
