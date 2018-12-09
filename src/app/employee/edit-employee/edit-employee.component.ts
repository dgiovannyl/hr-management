import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Project } from 'src/app/project/project.interface';
import { ProjectService } from 'src/app/project/project.service';
import { Employee } from '../employee.interface';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {
  employee: Employee;
  projects: Project[];
  selectedProject: number;

  ageFormControl = new FormControl();
  birthDayFormControl = new FormControl();
  companyFormControl = new FormControl();
  nameFormControl = new FormControl();
  projectFormControl = new FormControl();

  createProjectForm = new FormGroup({
    age: this.ageFormControl,
    birthDay: this.birthDayFormControl,
    company: this.companyFormControl,
    name: this.nameFormControl,
    project: this.projectFormControl
  });

  constructor(
    private dialogRef: MatDialogRef<EditEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Employee,
    private projectService: ProjectService
  ) {
    this.ageFormControl.setValue(data.age);
    this.birthDayFormControl.setValue(data.birthday);
    this.companyFormControl.setValue(data.company);
    this.nameFormControl.setValue(data.name);
    this.projectFormControl.setValue(data.projectId);
    this.projectService.getProjects().subscribe((projects: Project[]) => {
      this.projects = projects;
    });
  }

  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  private getEmployeePayload() {
    return {
      employee: {
        age: this.ageFormControl.value,
        birthDay: new Date(this.birthDayFormControl.value),
        company: this.ageFormControl.value,
        id: this.data.id,
        name: this.nameFormControl.value,
        projectId: this.projectFormControl.value,
      },
      selectedProject: this.projectFormControl.value,
      originalProject: this.data.projectId
    };
  }
}
