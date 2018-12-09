import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpApiService } from '../core/http-api.service';
import { Project } from './project.interface';

@Injectable()
export class ProjectService {
  constructor(private httpApiService: HttpApiService) {}

  changeTeamSize(selectedId: number, oldId: number): void {
    this.httpApiService
      .get(environment.projectPath + '/' + selectedId)
      .subscribe((project: Project) => {
        project.teamSize++;
        this.updateCreateProject(project).subscribe(resp => {});
      });

    if (oldId) {
      this.httpApiService
        .get(environment.projectPath + '/' + oldId)
        .subscribe((project: Project) => {
          project.teamSize--;
          this.updateCreateProject(project).subscribe(resp => {});
        });
    }
  }

  delete(projectId: number): Observable<any> {
    const url = `${environment.backEndUrl}${environment.projectPath}/${projectId}`;
    return this.httpApiService.delete(url);
  }

  getProjects(): Observable<any> {
    const url = `${environment.backEndUrl}${environment.projectPath}`;
    return this.httpApiService.get(url);
  }

  updateCreateProject(project: Project): Observable<any> {
    const url = `${environment.backEndUrl}${environment.projectPath}/${project.id}`;
    if (project.id) {
      return this.httpApiService.put(url, project);
    } else {
      return this.httpApiService.post(url, project);
    }
  }

  verifyTeamChanges(selectedId: number, oldId: number): void {
    if (selectedId !== oldId) {
      this.changeTeamSize(selectedId, oldId);
    }
  }
}
