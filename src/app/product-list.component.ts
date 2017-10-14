import {products, Product} from './product';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Condition} from './product'

@Component({
    selector: 'products-list',
    template: `
        <button (click)="loadProducts()">Load</button>
        <ul>
            <li *ngFor="let product of productsList; trackBy:trackByProductId" (click)="selectedProduct = product">
                {{product.id}} - {{product.name}} - {{getAsString(product.condition)}}
            </li>

        </ul>
        <product-detail [product]="selectedProduct" (deleteRequest)="deleteProduct($event)"></product-detail>
        <button (click)="changeProduct()">Change current product</button>
        <button (click)="changeProperty()">Change product property</button>
    `
})
export class ProductListComponent {
    productsList: Product[];
    selectedProduct: Product;

    deleteProduct(product: Product) {
        this.productsList.pop();
    }

    loadProducts() {
        this.productsList = [{
            id: 1,
            name: 'Coca-cola',
            condition: Condition.NEW
        },
            {
                id: 2,
                name: 'iPad',
                condition: Condition.USED
            }];
    }

    trackByProductId(index, product){
        return product.id;
    }

    getAsString(conditon: Condition) {
        return Condition[conditon];
    }

    changeProduct() {
        this.selectedProduct = {
            id: 3,
            name: 'Apple Watch',
            condition: Condition.USED
        }
    }

    changeProperty() {
        this.selectedProduct.name = "Google Pixel 2";
        // if immutable
        // this.selectedProduct = this.selectedProduct.set(...)
    }


}