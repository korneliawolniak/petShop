import {Component} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {MatTabsModule} from "@angular/material/tabs";
import {MatBadgeModule} from "@angular/material/badge";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    MatIconModule,
    MatTabsModule,
    RouterLink,
    MatBadgeModule
  ],
  standalone: true
})
export class HeaderComponent {
  constructor(private router: Router) {
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }


}
