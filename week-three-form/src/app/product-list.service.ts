import { Injectable } from '@angular/core';
import { Product } from './product';
import { productsList } from './mock-product';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export class ProductService {
    
    getProducts():Observable<Product[]>{
        return Observable.of(productsList);
    }
}