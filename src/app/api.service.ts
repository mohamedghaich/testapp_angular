import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  urlg:string="http://apicms.somee.com";
  constructor(private api:HttpClient, private router: Router) { }

  getpage(num:number):any{
    return this.api.get(this.urlg+"/api/clients?page="+num+"&pageSize=8");
  }
  getshearch(Cliente:string,numM:string,numf:string,prenom:string,nom:string,num:number):any{
   return this.api.get(this.urlg+"/api/clients/search?cliente="+Cliente+"&numeroDeMembro="+numM+"&numeroDeFamilia="+numf+"&prenomPer="+prenom+"&nomPer="+nom+"&page="+num+"&pageSize=8");
  }
  login(u:any): any {
    const url = this.urlg+"/api/User/Login";
    return this.api.post(url,u);

  }
  testlogin():any{
    const username = sessionStorage.getItem("username");
    const token = sessionStorage.getItem("token");
    const url = this.urlg+"/api/User/CheckTokenValidity/"+username+"/"+token;

    return this.api.get(url);
  }
  logout(){
    return this.api.delete(this.urlg+"/api/User/Logout/"+sessionStorage.getItem("username"));
  }
  getalluser():any{
    return this.api.get(this.urlg+"/api/User");
  }
  updateuser(user:string,u:any){
    return this.api.put(this.urlg+"/api/User/"+user,u);
  }
  adduser(u:any){
    return this.api.post(this.urlg+"/api/User",u);
  }
  deleteuser(user:string){
    return this.api.delete(this.urlg+"/api/User/"+user);
  }
  getoneuser(username:string){
    return this.api.get(this.urlg+"/api/User/"+username);
  }


}
