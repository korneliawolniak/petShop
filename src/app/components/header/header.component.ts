import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {MatTabsModule} from "@angular/material/tabs";
import {MatBadgeModule} from "@angular/material/badge";
import {CommonModule} from "@angular/common";
import {CartService} from "../../modules/feature-shopping-cart/services/cart/cart.service";
import {Observable} from "rxjs";
import {Tab} from "../../shared/models/tab.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    MatIconModule,
    MatTabsModule,
    RouterLink,
    MatBadgeModule,
    CommonModule
  ],
  standalone: true
})

export class HeaderComponent implements OnInit {
  public cartQuantity$?: Observable<number>;

  public tabsArray: Tab[] = [
    {label: 'About Us', routerLink: '/'},
    {label: 'Dog', routerLink: '/dog'},
    {label: 'Cat', routerLink: '/cat'},
    {label: 'Contact', routerLink: '/contact'}
  ];

  constructor(private readonly router: Router,
              private readonly cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartQuantity$ = this.cartService.totalQuantity$
  }

  public isActive(route: string): boolean {
    return this.router.url === route;
  }
}
