import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { ProjectService } from './project.service';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [ProjectComponent, EditProjectComponent],
  exports: [ProjectComponent],
  imports: [CommonModule, SharedModule],
  providers: [ProjectService],
  entryComponents: [EditProjectComponent]
})
export class ProjectModule {}
