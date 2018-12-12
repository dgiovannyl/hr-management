import { Component, OnInit, ViewChild } from '@angular/core';
import {
  MatDialog,
  MatPaginator,
  MatSnackBar,
  MatSort,
  MatTableDataSource
} from '@angular/material';
import { Project } from 'src/app/project/project.interface';
import { ProjectService } from 'src/app/project/project.service';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { CustomSnackbarService } from 'src/app/shared/custom-snackbar/custom-snackbar.service';
import { Color } from '../color/color.interface';
import { ColorService } from '../color/color.service';
import { EditEmployeeComponent } from '../edit-employee/edit-employee.component';
import { Employee } from '../employee.interface';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  colors: Color[];
  dataSource: MatTableDataSource<Employee>;
  displayedColumns = [
    'id',
    'name',
    'company',
    'age',
    'birthday',
    'favoriteColor',
    'project',
    'actionsColumn'
  ];
  editEmployeeWidth = '500px';
  @ViewChild(MatPaginator) paginator: MatPaginator;
  projects: Project[];
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private colorService: ColorService,
    private customSnackBar: CustomSnackbarService,
    private dialog: MatDialog,
    private employeeService: EmployeeService,
    private projectService: ProjectService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.projectService.getProjects().subscribe((projects: Project[]) => {
      this.projects = projects;
    });

    this.colorService.getColors().subscribe((colors: Color[]) => {
      this.colors = colors;
    });

    this.getEmployees();
  }

  editEmployee(employee: Employee): void {
    this.employeeService.updateCreateEmployee(employee).subscribe(resp => {
      if (employee.id) {
        this.customSnackBar.openSnackBar(this.snackBar, 'Employee was updated.', 'OK');
      } else {
        this.customSnackBar.openSnackBar(this.snackBar, 'Employee was created.', 'OK');
      }
      this.getEmployees();
    });
  }

  deleteEmployee(employee: Employee): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        title: 'Delete employee.',
        message: `Are you sure to delete ${employee.name}`
      }
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data && data.accept === true) {
        this.employeeService.delete(employee.id).subscribe(resp => {
          this.projectService.changeTeamSize(null, employee.projectId);
          this.customSnackBar.openSnackBar(this.snackBar, 'Employee was removed.', 'OK');
          this.getEmployees();
        });
      }
    });
  }

  getEmployees(): void {
    this.employeeService.getEmployees().subscribe((employees: Employee[]) => {
      employees.forEach((employee: Employee) => {
        const project = this.projects.find(projectItem => projectItem.id === employee.projectId);
        if (project) {
          employee.projectDescription = project.name;
        }

        const color = this.colors.find(colorItem => colorItem.id === employee.favoriteColor);
        if (color) {
          employee.favoriteColorDescription = color.name;
        }
      });

      this.dataSource = new MatTableDataSource(employees);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  newEmployee(): void {
    this.openEmployeeDialog({});
  }

  openEmployeeDialog(employee: Employee): void {
    const dialogRef = this.dialog.open(EditEmployeeComponent, {
      width: this.editEmployeeWidth,
      data: employee
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        if (data.employee) {
          this.editEmployee(data.employee);
          this.projectService.changeTeamSize(data.selectedProject, data.originalProject);
          this.getEmployees();
        }
      }
    });
  }
}
