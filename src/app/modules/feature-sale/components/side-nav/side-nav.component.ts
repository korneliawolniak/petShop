import {Component} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";
import {RoutesPath} from "../../../../shared/enums/enums";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  imports: [
    RouterLink,
    NgForOf
  ],
  standalone: true
})
export class SideNavComponent {
  public categories = [
    {name: 'Dry food', link: RoutesPath.DRY},
    {name: 'Wet food', link: RoutesPath.WET},
    {name: 'Treats', link: RoutesPath.TREATS},
    {name: 'Collars', link: RoutesPath.COLLARS},
    {name: 'Leashes', link: RoutesPath.LEASHES},
    {name: 'Toys', link: RoutesPath.TOYS}
  ];
  public category?: string;

  constructor(private readonly router: Router,
              private readonly activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.category = params['animal'];
    })
  }

  public navigate(link: string): void {
    this.router.navigate([this.category, link], {queryParams: {animal: this.category, category: link}});
  }
}
