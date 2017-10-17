import { Product} from './product';
import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'product-detail',
    template: `
        <p *ngIf="product">
            ProductId: <input [(ngModel)]="product.id"/>
            Name: <input [(ngModel)]="product.name"/><br>
        <span>Product Detail </span><br>           
        ProductId: {{product.id}}<br>
        Name: {{"   " + product.name}}<br>
        <button (click)="requestDelete()">Delete</button>
        </p>
        
            
        `
})
export class ProductDetailComponent {
    @Input()
    product: Product;

    @Output()
    deleteRequest = new EventEmitter<Product>();

    requestDelete() {
        this.deleteRequest.emit(this.product);
    }    
}