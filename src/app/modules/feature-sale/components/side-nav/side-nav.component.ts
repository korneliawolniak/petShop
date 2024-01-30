import {Component} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";

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
    {name: 'Dry food', link: 'dry-food'},
    {name: 'Wet food', link: 'wet-food'},
    {name: 'Treats', link: 'treats'},
    {name: 'Collars', link: 'collars'},
    {name: 'Leashes', link: 'leashes'},
    {name: 'Toys', link: 'toys'}
  ];
  public category?: string;

  constructor(private readonly router: Router,
              private readonly activatedRoute: ActivatedRoute,) {
  }

  public navigate(link: string): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.category = params['animal'];
    })
    this.router.navigate([this.category, link], {queryParams: {animal: this.category, category: link}});
  }
}
