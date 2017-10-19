import { FormGroup, FormControl, Validators , FormBuilder} from '@angular/forms';
import { Component, Pipe} from '@angular/core';
import { ProductDetailComponent} from './product-detail.component';
import { ProductService} from './product-list.service';
import { SignupFormComponent} from './form.component';
import {products, Product} from './product';
@Component({
    selector: 'products-list',
    templateUrl: './product-list.html'    
    , 
    providers:[ProductService]
})
export class ProductListComponent {
    count= 0;
    name2:String;
    toogle: boolean=false;
     show= true;
    productToadd: Product= new Product();
    cartAddedList: Product[]= [];
    selectedProduct: Product;
    productsList:Product[];
    
    constructor(productService:ProductService){
    productService.getProducts().subscribe((products)=>this.productsList=products);
    }
    
        
    
    log(model) {
console.log(model);
}
submit(form){
    this.productsList.push(this.productToadd);
    console.log(this.productToadd.id);
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

  
