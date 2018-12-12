import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Observable } from 'rxjs';
import { Project } from 'src/app/project/project.interface';
import { ProjectService } from 'src/app/project/project.service';
import { Color } from '../color/color.interface';
import { ColorService } from '../color/color.service';
import { Employee } from '../employee.interface';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {
  colorList$: Observable<Color[]>;
  employee: Employee;
  projects: Project[];
  selectedProject: number;

  ageFormControl = new FormControl();
  birthdayFormControl = new FormControl();
  companyFormControl = new FormControl();
  favoriteColorFormControl = new FormControl();
  nameFormControl = new FormControl();
  projectFormControl = new FormControl();

  createProjectForm = new FormGroup({
    age: this.ageFormControl,
    birthday: this.birthdayFormControl,
    company: this.companyFormControl,
    favoriteColorFormControl: this.favoriteColorFormControl,
    name: this.nameFormControl,
    project: this.projectFormControl
  });

  constructor(
    private dialogRef: MatDialogRef<EditEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Employee,
    private projectService: ProjectService,
    private colorService: ColorService
  ) {
    this.colorList$ = this.colorService.getColors();
  }

  ngOnInit() {
    this.initializeForm(this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getEmployeePayload() {
    return {
      employee: {
        age: this.ageFormControl.value,
        birthday: this.birthdayFormControl.value,
        company: this.companyFormControl.value,
        id: this.data.id,
        name: this.nameFormControl.value,
        projectId: this.projectFormControl.value,
        favoriteColor: this.favoriteColorFormControl.value
      },
      selectedProject: this.projectFormControl.value,
      originalProject: this.data.projectId
    };
  }

  initializeForm(employee: Employee) {
    this.ageFormControl.setValue(employee.age);
    this.birthdayFormControl.setValue(employee.birthday);
    this.companyFormControl.setValue(employee.company);
    this.nameFormControl.setValue(employee.name);
    this.projectFormControl.setValue(employee.projectId);
    this.favoriteColorFormControl.setValue(employee.favoriteColor);
    this.projectService.getProjects().subscribe((projects: Project[]) => {
      this.projects = projects;
    });
  }
}
