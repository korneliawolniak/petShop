import {Component, OnInit} from '@angular/core';
import {ItemComponent} from "../item/item.component";
import {Router} from "@angular/router";

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
  public pageTitle?: string;

  constructor(private readonly router: Router) {
  }

  public ngOnInit() {
    this.pageTitle = this.transformPathToTitle(this.router.url)

  }

  private transformPathToTitle(path: string): string {
    const trimmedPath = path.replace('/', '');
    return trimmedPath.charAt(0).toUpperCase() + trimmedPath.slice(1);
  }


}
