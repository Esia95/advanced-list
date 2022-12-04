import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { EmployeeListComponent } from './employee-list.component';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [MatListModule, CommonModule, MatChipsModule, MatGridListModule, MatCardModule, MatButtonModule],
  declarations: [EmployeeListComponent],
  providers: [],
  exports: [EmployeeListComponent]
})
export class EmployeeListComponentModule {
}
