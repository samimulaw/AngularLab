import { Component, Input, Output, EventEmitter} from '@angular/core';
import {Product} from './product'
@Component({
    selector: 'products-detail',
    template: ` 
    
    <div *ngIf="detailProduct">  
    <h3>Current Product Detail</h3>   
     <p>  {{detailProduct.id}} - {{detailProduct.name}}</p> 
    <div>
    <button (click)= "deleteProduct()">Delete</button>
    <button (click)= "addProduct()">AddToCart</button>
    `
})
export class ProductDetailComponent {
   
   @Input() detailProduct: Product;
   @Output() deleterequest= new EventEmitter<Product>();
   @Output() addrequest= new EventEmitter<Product>();
   deleteProduct(){
    this.deleterequest.emit(this.detailProduct);
   }
   addProduct(){
       this.addrequest.emit(this.detailProduct);
   }
 }