import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../services/products/products.service";
import {Observable, switchMap} from "rxjs";
import {Product} from "../../../feature-shopping-cart/models/product.model";

@Component({
  selector: 'app-sale-page',
  templateUrl: './sale-page.component.html',
  styleUrls: ['./sale-page.component.scss']
})
export class SalePageComponent implements OnInit {
  public pageTitle?: string;
  public products$?: Observable<Product[]>;

  constructor(private readonly activatedRoute: ActivatedRoute,
              private readonly productsService: ProductsService) {
  }

  public ngOnInit(): void {
    this.getProducts();
  }

  private setTitle(path: string): void {
    this.pageTitle = path.charAt(0).toUpperCase() + path.slice(1);
  }

  private getProducts(): void {
    this.products$ = this.activatedRoute.queryParams.pipe(
      switchMap(params => {
        const animal = params['animal'];
        const category = params['category'];
        this.setTitle(animal);
        return this.productsService.getProducts(animal, category);
      })
    );
  }
}
