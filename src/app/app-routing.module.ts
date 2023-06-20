import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.guard';
import { AdminComponent } from './components/admin/admin.component';
import { AddComponent } from './components/admin/add/add.component';
import { UpdateComponent } from './components/admin/update/update.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {path:'',component:LayoutComponent,canActivate: [AuthGuard],children:[
    { path: 'home', component: HomeComponent },
    {
      path: 'admin', component: AdminComponent, children: [
        { path: 'add', component: AddComponent },
        { path: 'update', component: UpdateComponent },
        { path: '', redirectTo: 'update', pathMatch: "full" }
      ]
    },
    { path: '', redirectTo: '/home', pathMatch: "full" }
  ]},
  { path: 'login', component: LoginComponent }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
