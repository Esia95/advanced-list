import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {BehaviorSubject, Observable, switchMap} from 'rxjs';
import { EmployeeService } from '../../services/employee.service';
import {EmployeeModel} from "../../models/employee.model";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListComponent {
  readonly data$: Observable<EmployeeModel[]> = this._employeeService.getAll();
  private _refreshSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  public refresh$: Observable<void> = this._refreshSubject.asObservable();
  readonly refreshedList$: Observable<EmployeeModel[]> = this.refresh$.pipe(
    switchMap(data => this._employeeService.getAll())
  )

  constructor(private _employeeService: EmployeeService) {
  }

  delete(id: number): void {
    this._employeeService.delete(id).subscribe(() => this._refreshSubject.next())
  }
}
