import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
export class CartCounterComponent implements OnInit {
  @Output() public amount: EventEmitter<number> = new EventEmitter<number>();
  @Input() public maxValue = 100;
  @Input() public quantity?: number;
  public value = 1;

  public ngOnInit() {
    if (this.quantity) {
      this.value = this.quantity
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
