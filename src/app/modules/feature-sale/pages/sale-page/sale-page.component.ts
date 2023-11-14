import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ProductsService} from "../../services/products/products.service";
import {Products} from "../../models/products.model";
import {NavService} from "../../services/navigation/nav.service";
import {switchMap} from "rxjs";

@Component({
  selector: 'app-sale-page',
  templateUrl: './sale-page.component.html',
  styleUrls: ['./sale-page.component.scss']
})
export class SalePageComponent implements OnInit {
  public animalCategory!: string;
  public productCategory?: string;
  public pageTitle?: string;
  public products?: Products;
  public products$: any;

  constructor(private readonly router: Router,
              private readonly productsService: ProductsService,
              public readonly navService: NavService) {
  }

  public ngOnInit(): void {
    this.pageTitle = this.transformPathToTitle(this.router.url);
    this.getCategories(this.router.url);
    this.products$ = this.navService.selectedItem.pipe(switchMap((activeTab: string) => {
      return this.productsService.getProducts(this.animalCategory, activeTab)
    }));
  }


  private transformPathToTitle(path: string): string {
    const pathSegments = path.split('/');
    const relevantSegment = pathSegments[1] || pathSegments[0];
    return relevantSegment.charAt(0).toUpperCase() + relevantSegment.slice(1);
  }

  private getCategories(path: string): void {
    const segments = path.split('/').filter(segment => segment !== '');
    this.animalCategory = segments.length > 0 ? segments[0] : '';
    this.productCategory = segments.length > 1 ? segments[1] : '';
  }

}
