import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  users:any;
  usernameupdate:string="";
  usernamedelete:string="";
  userForm!: FormGroup;
  constructor(private api:ApiService,private formBuilder: FormBuilder){}
  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
   this.api.getalluser().subscribe((data:any)=>{this.users=data;})
  }
  showUpdatePopup(username:any){
  this.usernameupdate=username;
  }
  showDeleteConfirmation(username:any){
this.usernamedelete=username;
  }
  hideUpdatePopup(){
this.usernameupdate="";
  }
  deleteUser(){
this.usernamedelete="";
  }
  hideDeleteConfirmation(){
this.usernamedelete="";
  }
}
