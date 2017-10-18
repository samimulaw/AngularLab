import {products, Product} from './product';
import { Component, Pipe} from '@angular/core';
import { ProductDetailComponent} from './product-detail.component';
import { ProductService} from './product-list.service';
@Component({
    selector: 'products-list',
    template: `    
    <button (click)="toogleproduct()" class="btn btn-success">Products</button>
        <ul *ngIf="toogle">
            <table class="table table-responsive">
            <thead class="thead-default">
            <tr>
              <th>Id</th>
              <th>name</th>
             </tr>
             </thead>
            <tr *ngFor="let product of productsList" (click)= "selectedProduct= product">
            <td>{{product.id}}</td>
            <td>{{product.name}}</td>
            </tr>
            </table>
            <h3> {{count}} Item added to cart</h3>           
            <button (click)="showDiv()" class="btn btn-success"> show </button>
            <div id="cartList"  style="display:none;" > 
            <table class="table">
            <tr>
              <th>Id</th>
              <th>name</th>
             </tr>
            <tr *ngFor="let product of cartAddedList ">
            <td>{{product.id}}</td>
            <td>{{product.name}}</td>
            </tr>
            </table>
            </div>
           
        
        </ul>          
        <products-detail [detailProduct]= "selectedProduct" (deleterequest)= deleteProduct($event)
        (addrequest)= addToCart($event)></products-detail>  
       
    `, 
    providers:[ProductService]
})
export class ProductListComponent {
    count= 0;
    toogle: boolean=false;
     show= true;
    cartAddedList: Product[]= [];
    selectedProduct: Product;
    productsList:Product[];
    
    constructor(productService:ProductService){
    productService.getProducts().subscribe(products=> this.productsList=products);
    }
    
        
    
    
    
    toogleproduct(){
        this.toogle = ! this.toogle;
     }
     deleteProduct(product: Product){
        this.productsList.pop();
     } 
     addToCart(product: Product){
        this.count= this.count + 1;
        this.cartAddedList.push(product);
        }
     showDiv() {
            document.getElementById('cartList').style.display = "block";
         }
     
}

  
