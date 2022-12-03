import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import {BehaviorSubject, combineLatest, Observable, of} from "rxjs";
import {EmployeeModel} from "../../models/employee.model";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-sorted-employee',
  templateUrl: './sorted-employee.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortedEmployeeComponent {
  private _orderSubject: BehaviorSubject<string> = new BehaviorSubject<string>('asc')
  public employeeList$: Observable<string>= this._orderSubject.asObservable();

  readonly employee$: Observable<EmployeeModel[]> = combineLatest([
    this._employeeService.getAll(),
    this.employeeList$
  ]).pipe(
    map(([employee, employeeSort]: [EmployeeModel[],string]) => {
      return employee.sort((a, b) => {
        if (a.salary > b.salary) return employeeSort === 'asc' ? 1 : -1;
        if (a.salary < b.salary) return employeeSort === 'asc' ? -1 : 1;
        return 0;
      })
    }))

  public employeeSort: Observable<string[]>=of(['asc','desc'])

  constructor(private _employeeService: EmployeeService) {
  }

  sort(order:string):void{
    this._orderSubject.next(order)
  }
}
