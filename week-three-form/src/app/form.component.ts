import { Component, Pipe} from '@angular/core';
import { FormGroup, FormControl, Validators , FormBuilder} from '@angular/forms';
@Component({
    selector: 'app-signup-form',
    templateUrl: `<form #form="ngForm" (ngSubmit)="submit(form)">
    
        <div class="form-group">
        <label for="product_name">Product Name</label>
        <input [(ngModel)]= "productToadd.name" required name="product_name" #productName="ngModel" (change)="log(productName)" 
        id="product_name" type="text" class="form-control">{{productToadd.name}}
      
        <div class="alert alert-danger" *ngIf="productName.touched && !productName.valid">
               You left the product empty
        </div>
    
    
        </div>
        <div class="form-group">
        <label for="Id">ID</label>
        <input [(ngModel)]= "productToadd.id" required name="product_Id" #productId="ngModel" (change)="log(productName)" 
        id="product_name" type="text" class="form-control">{{productToadd.Id}}
        </div>
        <button class="btn btn-primary">Add Product</button>
    </form>`,
    styles: []
    })
    export class SignupFormComponent {
        
    }
    
        
