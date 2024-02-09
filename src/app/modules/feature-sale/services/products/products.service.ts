import {Injectable} from '@angular/core';
import {ProductsApiService} from "../products-api/products-api.service";
import {map, Observable} from "rxjs";
import {Product} from "../../../feature-shopping-cart/models/product.model";
import {RoutesPath} from "../../../../shared/enums/enums";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private readonly productsApiService: ProductsApiService) {
  }

  public getProducts(animalCategory: string, activeTab: string | undefined): Observable<Product[]> {
    return this.productsApiService.getProducts(animalCategory).pipe(map(products => {
      switch (activeTab) {
        case RoutesPath.DRY:
          return products.dryFood;
        case RoutesPath.WET:
          return products.wetFood;
        case RoutesPath.TREATS:
          return products.treats;
        case RoutesPath.COLLARS:
          return products.collars;
        case RoutesPath.LEASHES:
          return products.leashes;
        case RoutesPath.TOYS:
          return products.toys;
        default:
          return []
      }
    }))
  }
}
