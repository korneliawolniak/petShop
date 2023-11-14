import {Product} from "../../feature-shopping-cart/models/product.model";

export interface Products {
  dryFood: Product[];
  wetFood: Product[];
  treats: Product[];
  collars: Product[];
  leashes: Product[];
  toys: Product[];
}
