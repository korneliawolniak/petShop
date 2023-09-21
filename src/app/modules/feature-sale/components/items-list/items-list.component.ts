import {Component} from '@angular/core';
import {ItemComponent} from "../item/item.component";

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

}
