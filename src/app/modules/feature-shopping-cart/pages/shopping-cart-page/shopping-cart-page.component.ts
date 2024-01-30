import {Component} from '@angular/core';
import {CartService} from "../../services/cart/cart.service";

@Component({
  selector: 'app-shopping-cart-page',
  templateUrl: './shopping-cart-page.component.html',
  styleUrls: ['./shopping-cart-page.component.scss']
})
export class ShoppingCartPageComponent {
  public cartQuantity$ = this.cartService.totalQuantity$

  constructor(private readonly cartService: CartService) {
  }
}
