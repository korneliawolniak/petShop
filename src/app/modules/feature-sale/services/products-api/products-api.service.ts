import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {dogProducts} from "../../../../shared/mocks/dog-products.mocks";
import {catProducts} from "../../../../shared/mocks/cat-products.mocks";
import {Products} from "../../models/products.model";

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {

  getProducts(animalCategory: string): Observable<Products> {
    if (animalCategory == 'dog') {
      return of(dogProducts)
    } else {
      return of(catProducts)
    }
  }
}
