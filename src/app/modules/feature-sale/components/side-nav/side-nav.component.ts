import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
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
}
