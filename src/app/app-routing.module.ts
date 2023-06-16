import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.guard';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent ,canActivate:[AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path:'',redirectTo: '/home',pathMatch:"full"}, ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  }
