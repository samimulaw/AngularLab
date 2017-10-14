import {ProductDetailComponent} from './product-detail.component';
import {ProductListComponent} from './product-list.component';
import {MyFirstComponent} from './my-first.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        MyFirstComponent,
        ProductListComponent,
        ProductDetailComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
