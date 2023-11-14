import {Injectable} from '@angular/core';
import {ProductsApiService} from "../products-api/products-api.service";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private readonly productsApiService: ProductsApiService) {
  }

  getProducts(animalCategory: string, activeTab: string) {
    return this.productsApiService.getProducts(animalCategory).pipe(map(products => {
      switch (activeTab) {
        case 'dry-food':
          return products.dryFood
          break;
        case 'wet-food':
          return products.wetFood
          break;
        case 'treats':
          return products.treats
          break;
        case 'collars':
          return products.collars
          break;
        case 'leashes':
          return products.leashes
          break;
        case 'toys':
          return products.toys
          break;
        default:
          return []
      }
    }))
  }
}
