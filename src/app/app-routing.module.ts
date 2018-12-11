import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication/authentication.guard';
import { LoginComponent } from './authentication/login/login.component';
import { NotFoundComponent } from './authentication/not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    // loadChildren: './dashboard/dashboard.module#DashBoardModule',
    component: DashboardComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'projects',
    loadChildren: './project/project.module#ProjectModule',
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'employees',
    loadChildren: './employee/employee.module#EmployeeModule',
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
