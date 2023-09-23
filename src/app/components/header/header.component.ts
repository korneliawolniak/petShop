import {Component} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {MatTabsModule} from "@angular/material/tabs";
import {MatBadgeModule} from "@angular/material/badge";
import {CommonModule} from "@angular/common";

interface Tab {
  label: string;
  routerLink: string;
}

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

export class HeaderComponent {
  public tabsArray: Tab[] = [
    {label: 'About Us', routerLink: '/'},
    {label: 'Dog', routerLink: '/dog'},
    {label: 'Cat', routerLink: '/cat'},
    {label: 'Contact', routerLink: '/contact'}
  ];

  constructor(private router: Router) {
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }
}
