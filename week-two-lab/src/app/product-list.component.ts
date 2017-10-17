import {products, Product} from './product';
import { Component, Pipe} from '@angular/core';
import { ProductDetailComponent} from './product-detail.component';

@Component({
    selector: 'products-list',
    template: `    
    <button (click)="toogleproduct()" >Products</button>
        <ul *ngIf="toogle" class="products">
        <h2>My Products</h2>
        <ul class="products" >
          <li *ngFor="let product of productsList" (click)= "selectedProduct= product">
          <span class="badge">{{product.id}}</span> - {{product.name}} - {{product.condition}}
          </li>
        </ul>                    
        </ul>   
        
        <product-detail [product]= "selectedProduct" (deleteRequest)= deleteProduct($event)>
    </product-detail>        
    `,
    styles: [`
    .products {
        margin: 0 0 2em 0;
        list-style-type: none;
        padding: 0;
        width: 15em;
      }
      .products li{
        cursor: pointer;
        position: relative;
        left: 0;
        background-color: #EEE;
        margin: .5em;
        padding: .3em 0;
        height: 1.6em;
        border-radius: 4px;

      }

      .products .text {
        position: relative;
        top: -3px;
      }
      .products .badge {
        display: inline-block;
        font-size: small;
        color: white;
        padding: 0.8em 0.7em 0 0.7em;
        background-color: #607D8B;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -4px;
        height: 1.8em;
        margin-right: .8em;
        border-radius: 4px 0 0 4px;
      }
    `]
})
export class ProductListComponent {
    
    toogle: boolean=false;
     show= true;
     productsList: Product[]= [{
        id: 1,
        name: 'caco-cola',
        condition: "used"
    },
    {
        id: 2,
        name: 'Pepsi',
        condition: "new"
    },
    {
        id: 4,
        name: 'Sprit',
        condition: "new"
    },
    {
        id: 4,
        name: 'smirnoff',
        condition: "new"
    },
    {
        id: 5,
        name: 'Heniken',
        condition: "used"
    },
    {
        id: 6,
        name: '7-uP',
        condition: "new"
    }];
    selectedProduct: Product;
  
    
    
    
        
    
    
    
    toogleproduct(){
        this.toogle = ! this.toogle;
     }
     deleteProduct(product: Product){
        this.productsList.pop();
     } 
    
     showDiv() {
            document.getElementById('cartList').style.display = "block";
         }
        /*  <products-detail [detailProduct]= "selectedProduct" (deleterequest)= deleteProduct($event)
         (addrequest)= addToCart($event)></products-detail>
 */}

  
