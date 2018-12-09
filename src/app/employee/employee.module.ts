import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeService } from './employee.service';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [EmployeeComponent, EditEmployeeComponent],
  exports: [EmployeeComponent],
  imports: [CommonModule, SharedModule],
  providers: [EmployeeService],
  entryComponents: [EditEmployeeComponent]
})
export class EmployeeModule {}
