import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  users: any;
  usernameupdate: string = "";
  usernamedelete: string = "";
  userForm!: FormGroup;
  constructor(private api: ApiService, private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
    this.api.getalluser().subscribe((data: any) => { this.users = data; })
  }
  showUpdatePopup(username: any) {
    this.usernameupdate = username;
    this.users.forEach((user: any) => {
      if (user.username == username) {
        this.userForm.controls['username'].setValue(username);
        this.userForm.controls['password'].setValue(user.password);
        this.userForm.controls['role'].setValue(user.role);
      }
    });
  }
  showDeleteConfirmation(username: any) {
    this.usernamedelete = username;
  }
  hideUpdatePopup() {
    this.usernameupdate = "";
  }
  deleteUser() {

    this.api.deleteuser(this.usernamedelete).subscribe(
      response => {
        this.api.getalluser().subscribe((data: any) => { this.users = data; });
        alert("User deteted successfully");
        console.log(response);
      },
      error => {
        alert("Error in deleting user");
        console.error(error);
      }
    );
    this.usernamedelete = "";
  }
  updateuser(){

    const { username, password, role } = this.userForm.value;
    const user = {
      username: username,
      password: password,
      role: role
    };
    if(this.userForm.valid){
     this.api.updateuser(this.usernameupdate,user).subscribe(
      response => {
        this.api.getalluser().subscribe((data: any) => { this.users = data; });
        alert("User updated successfully"+this.usernameupdate);
        console.log(response);

      },
      error => {
        alert("Error in updating user"+this.usernameupdate);
        console.error(error);
      }
    );
    this.usernameupdate = "";
  }
  }
  hideDeleteConfirmation() {
    this.usernamedelete = "";
  }
}
