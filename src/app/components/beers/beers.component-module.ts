import { NgModule } from '@angular/core';
import { BeersComponent } from './beers.component';
import {MatCardModule} from "@angular/material/card";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {MatPaginatorModule} from "@angular/material/paginator";

@NgModule({
  imports: [
    MatCardModule,
    NgIf,
    NgForOf,
    AsyncPipe,
    MatPaginatorModule
  ],
  declarations: [BeersComponent],
  providers: [],
  exports: [BeersComponent]
})
export class BeersComponentModule {
}
