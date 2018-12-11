import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AuthenticationService } from './authentication.service';
import { HttpApiService } from './http-api.service';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  declarations: [SideNavComponent],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [SideNavComponent],
  providers: [AuthenticationService, HttpApiService]
})
export class CoreModule {}
