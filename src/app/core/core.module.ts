import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthenticationModule } from '../authentication/authentication.module';
import { AuthenticationService } from '../authentication/authentication.service';
import { SharedModule } from '../shared/shared.module';
import { HttpApiService } from './http-api.service';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  declarations: [SideNavComponent],
  imports: [CommonModule, AuthenticationModule, SharedModule, RouterModule],
  exports: [SideNavComponent, AuthenticationModule],
  providers: [AuthenticationService, HttpApiService]
})
export class CoreModule {}
