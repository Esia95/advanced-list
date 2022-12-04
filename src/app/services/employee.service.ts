import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../models/employee.model';
import {map} from "rxjs/operators";
import {ApiResponse} from "./api.response";
import {EmployeeResponse} from "../models/employee-response.model";
import {ProductModel} from "../models/product.model";

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }

  delete(id: number): Observable<EmployeeModel> {
    return this._httpClient.delete<EmployeeModel>(`https://dummy.restapiexample.com/api/v1/delete/${id}`);
  }

  getAll(): Observable<{ name: string; id: number; salary: string; age: string }[]> {
    return this._httpClient.get<ApiResponse<EmployeeResponse[]>>('https://dummy.restapiexample.com/api/v1/employees',
    ).pipe(
      map((response: ApiResponse<EmployeeResponse[]>) => {
        return response.data.map((employeeResponse: EmployeeResponse) => {
          return {
            name: employeeResponse.employee_name,
            id: employeeResponse.id,
            age: employeeResponse.employee_age,
            salary: employeeResponse.employee_salary
          }
        });
      })
    )
  };
}
