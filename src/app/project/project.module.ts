import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectService } from './project.service';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [ProjectComponent, EditProjectComponent],
  exports: [ProjectComponent],
  imports: [CommonModule, SharedModule, ProjectRoutingModule],
  providers: [ProjectService],
  entryComponents: [EditProjectComponent]
})
export class ProjectModule {}
