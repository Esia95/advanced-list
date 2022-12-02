import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { FilteredProductRoutingComponent } from './filtered-product-routing.component';
import {RouterLink, RouterModule} from "@angular/router";

@NgModule({
  imports: [MatCardModule, MatListModule, FlexModule, CommonModule, RouterModule],
  declarations: [FilteredProductRoutingComponent],
  providers: [],
  exports: [FilteredProductRoutingComponent]
})
export class FilteredProductRoutingComponentModule {
}
