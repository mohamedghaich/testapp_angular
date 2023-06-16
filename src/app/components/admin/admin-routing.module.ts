import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { JobUpdateComponent } from '../job-update/job-update.component';
import { JobCreateComponent } from '../job-create/job-create.component';

const routes: Routes = [
  { path: '', component:AdminComponent , children:[
    { path: 'update', component: JobUpdateComponent },
    { path: 'create', component: JobCreateComponent },
    { path: '', redirectTo: '/admin/update', pathMatch: 'full' }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
