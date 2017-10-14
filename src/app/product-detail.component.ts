import {Condition, Product} from './product';
import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'product-detail',
    template: `
        <p *ngIf="product">
            ProductId: <input [(ngModel)]="product.id"/>
            Name: <input [(ngModel)]="product.name"/>
            Condition: <select [(ngModel)]="product.condition">
            <option *ngFor="let c of conditions" [value]="c">{{getAsString(c)}}</option>
        </select>
            <button (click)="requestDelete()">Delete</button>
        </p>`
})
export class ProductDetailComponent {
    @Input()
    product: Product;

    @Output()
    deleteRequest = new EventEmitter<Product>();

    requestDelete() {
        this.deleteRequest.emit(this.product);
    }

    conditions = Condition;

    getAsString(conditon: Condition) {
        return Condition[conditon];
    }
}