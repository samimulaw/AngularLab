import { Injectable } from '@angular/core';
import { Product } from './product';
import { productsList } from './mock-product';
@Injectable()
export class ProductService {
    getProducts():Promise<Product[]>{
        return Promise.resolve(productsList);
    }
}