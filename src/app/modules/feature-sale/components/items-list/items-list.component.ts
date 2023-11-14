import {Component, Input, OnInit} from '@angular/core';
import {ItemComponent} from "../item/item.component";
import {Router} from "@angular/router";
import {Products} from "../../models/products.model";
import {NavService} from "../../services/navigation/nav.service";

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
  imports: [
    ItemComponent
  ],
  standalone: true
})
export class ItemsListComponent implements OnInit {
  @Input() products?: Products;
  @Input() pageTitle?: string;

  constructor(private readonly router: Router,
              private readonly navService: NavService) {
  }

  public ngOnInit(): void {
    console.log('this.products', this.products)
    this.navService.selectedItem.subscribe(item => {
      console.log('Selected Nav Item:', item);
    });

  }


}
