import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BackendService } from './backend.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientInMemoryWebApiModule.forRoot(BackendService),
  ]
})
export class BackendModule { }
