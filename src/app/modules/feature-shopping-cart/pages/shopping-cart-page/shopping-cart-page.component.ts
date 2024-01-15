import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart/cart.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-shopping-cart-page',
  templateUrl: './shopping-cart-page.component.html',
  styleUrls: ['./shopping-cart-page.component.scss']
})
export class ShoppingCartPageComponent implements OnInit {
  public cartQuantity$?: Observable<number>;

  constructor(private readonly cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartQuantity$ = this.cartService.totalQuantity$
  }
}
