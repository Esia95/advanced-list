import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilteredProductListComponent } from './components/filtered-product-list/filtered-product-list.component';
import { SortedProductListComponent } from './components/sorted-product-list/sorted-product-list.component';
import { FilteredProductRoutingComponent } from './components/filtered-product-base/filtered-product-routing.component';
import { SortedEmployeeComponent } from './components/sorted-employee/sorted-employee.component';
import { FilteredEmployeeComponent } from './components/filtered-employee/filtered-employee.component';
import { FilteredProductListComponentModule } from './components/filtered-product-list/filtered-product-list.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { ProductServiceModule } from './services/product.service-module';
import { SortedProductListComponentModule } from './components/sorted-product-list/sorted-product-list.component-module';
import { FilteredProductRoutingComponentModule } from './components/filtered-product-base/filtered-product-routing.component-module';
import { SortedEmployeeComponentModule } from './components/sorted-employee/sorted-employee.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';
import { FilteredEmployeeComponentModule } from './components/filtered-employee/filtered-employee.component-module';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'product', component: FilteredProductListComponent },
    { path: 'sorted-products', component: SortedProductListComponent },
    { path: 'products/:category', component: FilteredProductRoutingComponent },
    { path: 'sorted-employee', component: SortedEmployeeComponent },
    { path: 'filtered-employees', component: FilteredEmployeeComponent }
  ]), FilteredProductListComponentModule, CategoriesServiceModule, ProductServiceModule, SortedProductListComponentModule, FilteredProductRoutingComponentModule, SortedEmployeeComponentModule, EmployeeServiceModule, FilteredEmployeeComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
