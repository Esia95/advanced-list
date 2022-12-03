import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { SortedEmployeeComponent } from './sorted-employee.component';
import {FlexModule} from "@angular/flex-layout";

@NgModule({
  imports: [MatCardModule, CommonModule, MatListModule, FlexModule],
  declarations: [SortedEmployeeComponent],
  providers: [],
  exports: [SortedEmployeeComponent]
})
export class SortedEmployeeComponentModule {
}
