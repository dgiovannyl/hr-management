import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProjectService } from '../project/project.service';
import { SharedModule } from '../shared/shared.module';
import { ColorService } from './color/color.service';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeService } from './employee.service';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [EmployeeComponent, EditEmployeeComponent],
  exports: [EmployeeComponent],
  imports: [CommonModule, SharedModule, EmployeeRoutingModule],
  providers: [EmployeeService, ProjectService, ColorService],
  entryComponents: [EditEmployeeComponent]
})
export class EmployeeModule {}
