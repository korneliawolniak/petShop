import {Injectable} from '@angular/core';
import {ProductsApiService} from "../products-api/products-api.service";
import {map, Observable} from "rxjs";
import {Product} from "../../../feature-shopping-cart/models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private readonly productsApiService: ProductsApiService) {
  }

  public getProducts(animalCategory: string, activeTab: string | undefined): Observable<Product[]> {
    return this.productsApiService.getProducts(animalCategory).pipe(map(products => {
      switch (activeTab) {
        case 'dry-food':
          return products.dryFood;
        case 'wet-food':
          return products.wetFood;
        case 'treats':
          return products.treats;
        case 'collars':
          return products.collars;
        case 'leashes':
          return products.leashes;
        case 'toys':
          return products.toys;
        default:
          return []
      }
    }))
  }
}
