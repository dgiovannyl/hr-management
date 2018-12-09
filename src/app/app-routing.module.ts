import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee/employee.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProjectComponent } from './project/project/project.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'notfound', component: NotFoundComponent },
  {
    path: 'dashboard',
    component: DashboardComponent
    // canActivate: [AuthGuardService]
  },
  {
    path: 'projects',
    component: ProjectComponent
    // canActivate: [AuthGuardService]
  },
  {
    path: 'employees',
    component: EmployeeComponent
    // canActivate: [AuthGuardService]
  },
  { path: 'callback', redirectTo: 'login' },
  { path: '', pathMatch: 'full', redirectTo: 'login' }
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
