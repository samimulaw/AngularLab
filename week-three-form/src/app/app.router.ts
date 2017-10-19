import {ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {SignupFormComponent} from './form.component';
import {AppComponent} from './app.component';
import {ProductListComponent} from './product-list.component';
export const router= [
{path: '', redirectTo:'home', pathMatch:'full'},
{path: 'add', component: SignupFormComponent},
{path: 'home',component: ProductListComponent}
];

export const routers: ModuleWithProviders= RouterModule.forRoot(router); 