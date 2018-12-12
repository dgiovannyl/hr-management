import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Project } from '../project.interface';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {
  customerNameFormControl = new FormControl();
  nameFormControl = new FormControl();
  teamSizeFormControl = new FormControl();

  createProjectForm = new FormGroup({
    customerName: this.customerNameFormControl,
    name: this.nameFormControl,
    teamSize: this.teamSizeFormControl
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Project,
    private dialogRef: MatDialogRef<EditProjectComponent>
  ) {
    this.customerNameFormControl.setValue(data.customerName);
    this.nameFormControl.setValue(data.name);
    this.teamSizeFormControl.setValue(data.teamSize ? data.teamSize : 0);
    this.teamSizeFormControl.disable();
  }

  ngOnInit() {}

  get editOrCreate(): string {
    return this.data.id ? 'Edit' : 'Create';
  }

  getProjectPayload(): Project {
    return {
      id: this.data.id,
      customerName: this.customerNameFormControl.value,
      name: this.nameFormControl.value,
      teamSize: this.teamSizeFormControl.value
    };
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
