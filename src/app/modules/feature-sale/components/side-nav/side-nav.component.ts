import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NavService} from "../../services/navigation/nav.service";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  imports: [
    RouterLink
  ],
  standalone: true
})
export class SideNavComponent {
  constructor(private readonly navService: NavService) {
  }

  public onNavItemClicked(item: string): void {
    this.navService.selectItem(item);
  }

}
