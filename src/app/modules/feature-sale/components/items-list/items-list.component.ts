import {Component, Input} from '@angular/core';
import {ItemComponent} from "../item/item.component";
import {Product} from "../../../feature-shopping-cart/models/product.model";

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
  imports: [
    ItemComponent
  ],
  standalone: true
})
export class ItemsListComponent {
  @Input() public products?: Product[];
  @Input() public pageTitle?: string;
}
