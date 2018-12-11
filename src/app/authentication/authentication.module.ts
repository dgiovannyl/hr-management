import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LoginComponent, NotFoundComponent],
  exports: [LoginComponent, NotFoundComponent],
  imports: [CommonModule, SharedModule]
})
export class AuthenticationModule {}
