import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {MatTabsModule} from "@angular/material/tabs";
import {MatBadgeModule} from "@angular/material/badge";
import {CommonModule} from "@angular/common";
import {CartService} from "../../modules/feature-shopping-cart/services/cart/cart.service";
import {Tab} from "../../shared/models/tab.model";
import {RoutesPath} from "../../shared/enums/enums";

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
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeaderComponent {
  public cartQuantity$ = this.cartService.totalQuantity$;

  public tabsArray: Tab[] = [
    {label: 'About Us', routerLink: '/'},
    {label: 'Dog', routerLink: `/${RoutesPath.DOG}`},
    {label: 'Cat', routerLink: `/${RoutesPath.CAT}`},
    {label: 'Contact', routerLink: `/${RoutesPath.CONTACT}`}
  ];

  constructor(private readonly router: Router,
              private readonly cartService: CartService) {
  }

  public isActive(route: string): boolean {
    const currentUrl = this.router.url;
    if (route === "/") {
      return currentUrl === "/";
    } else {
      return currentUrl.includes(route)
    }
  }

  public navigate(link: string) {
    const category = link.slice(1);
    if (category === RoutesPath.DOG || category === RoutesPath.CAT) {
      this.router.navigate([link], {queryParams: {animal: category, category: RoutesPath.DRY}});
    } else {
      this.router.navigate([link]);
    }
  }
}
