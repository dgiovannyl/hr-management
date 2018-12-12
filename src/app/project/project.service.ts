import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpApiService } from '../core/http-api.service';
import { Project } from './project.interface';

@Injectable()
export class ProjectService {
  constructor(private httpApiService: HttpApiService) {}

  changeTeamSize(selectedProjectId: number, oldProjectId: number): void {
    if (selectedProjectId !== oldProjectId) {
      if (selectedProjectId) {
        const url = `${environment.backEndUrl}${environment.projectPath}/${selectedProjectId}`;
        this.httpApiService.get(url).subscribe((project: Project) => {
          project.teamSize++;
          this.updateCreateProject(project).subscribe(resp => {});
        });
      }

      if (oldProjectId) {
        const url = `${environment.backEndUrl}${environment.projectPath}/${oldProjectId}`;
        this.httpApiService.get(url).subscribe((project: Project) => {
          project.teamSize--;
          this.updateCreateProject(project).subscribe(resp => {});
        });
      }
    }
  }

  delete(projectId: number): Observable<any> {
    const url = `${environment.backEndUrl}${environment.projectPath}/${projectId}`;
    return this.httpApiService.delete(url);
  }

  getProjects(): Observable<Project[]> {
    const url = `${environment.backEndUrl}${environment.projectPath}`;
    return this.httpApiService.get<Project[]>(url);
  }

  updateCreateProject(project: Project): Observable<any> {
    if (project.id) {
      const url = `${environment.backEndUrl}${environment.projectPath}/${project.id}`;
      return this.httpApiService.put(url, project);
    } else {
      const url = `${environment.backEndUrl}${environment.projectPath}`;
      return this.httpApiService.post(url, project);
    }
  }
}
