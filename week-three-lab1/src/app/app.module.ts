import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import {ProductListComponent} from './product-list.component';
import { AppComponent } from './app.component';
import { ShopingModule} from './shoping-module';
import { ProductDetailComponent} from './product-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent 
  ],
  imports: [
    ShopingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
