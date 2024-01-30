import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../services/products/products.service";
import {switchMap} from "rxjs";

@Component({
  selector: 'app-sale-page',
  templateUrl: './sale-page.component.html',
  styleUrls: ['./sale-page.component.scss']
})
export class SalePageComponent {
  public pageTitle?: string;
  public products$ = this.activatedRoute.queryParams.pipe(
    switchMap(params => {
      const animal = params['animal'];
      const category = params['category'];
      this.setTitle(animal);
      return this.productsService.getProducts(animal, category);
    })
  );

  constructor(private readonly activatedRoute: ActivatedRoute,
              private readonly productsService: ProductsService) {
  }

  private setTitle(path: string): void {
    this.pageTitle = path.charAt(0).toUpperCase() + path.slice(1);
  }
}
