import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ProductsService} from "../../services/products/products.service";
import {Observable, switchMap} from "rxjs";
import {Product} from "../../../feature-shopping-cart/models/product.model";

@Component({
  selector: 'app-sale-page',
  templateUrl: './sale-page.component.html',
  styleUrls: ['./sale-page.component.scss']
})
export class SalePageComponent implements OnInit {
  public animalCategory!: string;
  public productCategory?: string;
  public pageTitle?: string;
  public products$?: Observable<Product[]>;

  constructor(private readonly router: Router,
              private readonly productsService: ProductsService) {
  }

  public ngOnInit(): void {
    this.products$ = this.router.events.pipe(
      switchMap(() => {
        const url = this.router.url;
        const segments = url.split('/').filter(segment => segment !== '');
        this.getCategories(segments)
        this.pageTitle = this.transformPathToTitle(url);
        return this.productsService.getProducts(this.animalCategory, this.productCategory);
      })
    )
  }


  private transformPathToTitle(path: string): string {
    const pathSegments = path.split('/');
    const relevantSegment = pathSegments[1] || pathSegments[0];
    return relevantSegment.charAt(0).toUpperCase() + relevantSegment.slice(1);
  }

  private getCategories(segments: string[]): void {
    this.animalCategory = segments.length > 0 ? segments[0] : '';
    this.productCategory = segments.length > 1 ? segments[1] : '';
  }
}
