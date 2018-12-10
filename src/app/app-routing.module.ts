import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { NotFoundComponent } from './authentication/not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee/employee.component';
import { ProjectComponent } from './project/project/project.component';
import { AuthenticationGuard } from './authentication/authentication.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'notfound', component: NotFoundComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'projects',
    component: ProjectComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'employees',
    component: EmployeeComponent,
    canActivate: [AuthenticationGuard]
  },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
