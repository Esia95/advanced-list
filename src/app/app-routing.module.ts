import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilteredProductListComponent } from './components/filtered-product-list/filtered-product-list.component';
import { SortedProductListComponent } from './components/sorted-product-list/sorted-product-list.component';
import { FilteredProductListComponentModule } from './components/filtered-product-list/filtered-product-list.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { ProductServiceModule } from './services/product.service-module';
import { SortedProductListComponentModule } from './components/sorted-product-list/sorted-product-list.component-module';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'products', component: FilteredProductListComponent },
    { path: 'sorted-products', component: SortedProductListComponent }
  ]), FilteredProductListComponentModule, CategoriesServiceModule, ProductServiceModule, SortedProductListComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
