import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ProductsService} from "../../services/products/products.service";
import {Products} from "../../models/products.model";

@Component({
  selector: 'app-sale-page',
  templateUrl: './sale-page.component.html',
  styleUrls: ['./sale-page.component.scss']
})
export class SalePageComponent implements OnInit {
  public currentUrl!: string;
  public pageTitle?: string;
  public products?: Products;

  constructor(private readonly router: Router,
              private readonly productsService: ProductsService) {
  }

  public ngOnInit(): void {
    this.currentUrl = this.router.url;
    this.pageTitle = this.transformPathToTitle(this.router.url)
    this.getProducts();

  }

  getProducts(): void {
    this.productsService.getProducts(this.currentUrl).subscribe((data: Products | undefined) => this.products = data)
  }

  private transformPathToTitle(path: string): string {
    const pathSegments = path.split('/');
    const relevantSegment = pathSegments[1] || pathSegments[0];
    return relevantSegment.charAt(0).toUpperCase() + relevantSegment.slice(1);
  }
}
