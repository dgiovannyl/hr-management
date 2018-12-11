import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpApiService } from '../core/http-api.service';
import { Employee } from './employee.interface';

@Injectable()
export class EmployeeService {
  constructor(private httpApiService: HttpApiService) {}

  delete(employeeId: number): Observable<any> {
    const url = `${environment.backEndUrl}${environment.employeePath}/${employeeId}`;
    return this.httpApiService.delete(url);
  }

  getEmployees(): Observable<any> {
    const url = `${environment.backEndUrl}${environment.employeePath}`;
    return this.httpApiService.get(url);
  }

  updateCreateEmployee(employee: Employee): Observable<any> {
    if (employee.id) {
      const url = `${environment.backEndUrl}${environment.employeePath}/${employee.id}`;
      return this.httpApiService.put(url, employee);
    } else {
      const url = `${environment.backEndUrl}${environment.employeePath}`;
      return this.httpApiService.post(url, employee);
    }
  }
}
