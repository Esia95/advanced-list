import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { EmployeeListComponent } from './employee-list.component';
import {MatGridListModule} from "@angular/material/grid-list";

@NgModule({
  imports: [MatListModule, CommonModule, MatChipsModule, MatGridListModule],
  declarations: [EmployeeListComponent],
  providers: [],
  exports: [EmployeeListComponent]
})
export class EmployeeListComponentModule {
}
