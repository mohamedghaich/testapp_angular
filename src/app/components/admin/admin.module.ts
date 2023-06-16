import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { JobCreateComponent } from '../job-create/job-create.component';
import { JobUpdateComponent } from '../job-update/job-update.component';
import { AdminComponent } from './admin.component';
import { JobService } from 'src/app/job.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    JobCreateComponent,
    JobUpdateComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers:[
    JobService
  ]
})
export class AdminModule { }
