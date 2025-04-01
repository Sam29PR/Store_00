import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';

export const routes: Routes = [
    {path: '', component:HomeComponent}, // pagina de inicio 
    {path: 'products', component: ProductListComponent}// pagina de productos

];
