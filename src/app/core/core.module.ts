import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpApiService } from './http-api.service';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SideNavComponent],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [SideNavComponent],
  providers: [HttpApiService]
})
export class CoreModule {}
