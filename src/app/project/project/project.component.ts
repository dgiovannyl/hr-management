import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { CustomSnackbarService } from 'src/app/shared/custom-snackbar/custom-snackbar.service';
import { EditProjectComponent } from '../edit-project/edit-project.component';
import { Project } from '../project.interface';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  dataSource: MatTableDataSource<Project>;
  displayedColumns = ['name', 'teamSize', 'customerName', 'actionsColumn'];
  editProjectWidth = '500px';
  @ViewChild(MatPaginator) paginator: MatPaginator;
  projects: Project[];
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private customSnackBar: CustomSnackbarService,
    private dialog: MatDialog,
    private projectService: ProjectService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.getProjects();
  }

  private getProjects() {
    this.projectService.getProjects().subscribe((projects: Project[]) => {
      this.dataSource = new MatTableDataSource(projects);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  private deleteProject(project: Project) {

    // Open the dialog with parameters.
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        title: 'Delete project.',
        message: `Are you sure to delete ${project.name}`
      }
    });

    // Get the response when the dialog is closed.
    dialogRef.afterClosed().subscribe(data => {
      if (data && data.accept === true) {
        this.projectService.delete(project.id).subscribe(resp => {
          /* const position = this.projects.indexOf(project);
          const remove = this.projects.splice(position, 1);
          this.dataSource.data = this.projects; */
          this.getProjects();
          this.customSnackBar.openSnackBar(this.snackBar, 'Project was deleted.', 'OK');
        });
      }
    });
  }

  private editProject(project: Project) {
    this.projectService.updateCreateProject(project).subscribe(resp => {
      if (project.id) {
        this.customSnackBar.openSnackBar(this.snackBar, 'Project was updated.', 'OK');
      } else {
        this.customSnackBar.openSnackBar(this.snackBar, 'Project was created.', 'OK');
      }
      this.getProjects();
    });
  }

  private newProject() {
    const project: Project = {};
    this.openProjectDialog(project);
  }

  private openProjectDialog(project: Project) {
    // Open the dialog with parameters.
    const dialogRef = this.dialog.open(EditProjectComponent, {
      width: this.editProjectWidth,
      data: project
    });

    // Get the response when the dialog is closed.
    dialogRef.afterClosed().subscribe((projectData: Project) => {
      if (projectData) {
        this.editProject(projectData);
      }
    });
  }
}
