import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { EmployeeListComponent } from './employee-list.component';
import {FlexModule} from "@angular/flex-layout";

@NgModule({
  imports: [MatCardModule, CommonModule, MatListModule, FlexModule],
  declarations: [EmployeeListComponent],
  providers: [],
  exports: [EmployeeListComponent]
})
export class EmployeeListComponentModule {
}
