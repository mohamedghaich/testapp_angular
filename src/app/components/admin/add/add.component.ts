import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,private api:ApiService,private router: Router) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  addUser() {
    const { username, password, role } = this.userForm.value;
    const user = {
      username: username,
      password: password,
      role: role
    };
    if(this.userForm.valid){

      this.api.adduser(user).subscribe(
        response => {
          alert("User added successfully");
          console.log(response);
          this.router.navigate(['/admin/add']); // Replace '/' with the desired URL for redirection
        },
        error => {
          alert("Error in adding user");
          console.error(error);
        }
      );
    }
  }
}
