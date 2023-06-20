import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = "";
  password: string = "";
  err: boolean = true;
  constructor(private api: ApiService, private router: Router) { }
  ngOnInit(): void {

    if(sessionStorage.getItem("username")!=null){
      this.api.logout().subscribe();
      sessionStorage.clear();
    }
  }
  login() {

    const login = {
      username: this.email,
      password: this.password
    };
    this.api.login(login).subscribe(
      (response: { errorMessage: string; }) => {
        this.api.getoneuser(this.email).subscribe(
        (r:any) => {
          sessionStorage.setItem('role', r.role);

        },
        (error: any) => {
          this.err=false;
          this.router.navigate(['/login']);
        })
        sessionStorage.setItem('username', this.email);
        sessionStorage.setItem('token', response.errorMessage);

          this.router.navigate(['/home']);

      },
      (error: any) => {
        this.err=false;
      });
  }


}
