import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {BeersService} from "../../services/beers.service";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BeersComponent {
  constructor(private _beersService: BeersService) {
  }

  public pageSubject: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  public page$: Observable<number> = this.pageSubject.asObservable();
  public sizeSubject: BehaviorSubject<number> = new BehaviorSubject<number>(5);
  public size$: Observable<number> = this.sizeSubject.asObservable();

  data$: Observable<any> = this._beersService.getAll(this.pageSubject.value, this.sizeSubject.value)

  handlePageEvent(pageData: PageEvent) {
    let pageIndex = pageData.pageIndex +1
    let pageSize = pageData.pageSize
    this.pageSubject.next(pageIndex)
    this.sizeSubject.next(pageSize)
    this._beersService.getAll(this.pageSubject.value, this.sizeSubject.value)
      .subscribe(data => this.data$)
    this.data$ = this._beersService.getAll(this.pageSubject.value, this.sizeSubject.value)

  }
}
