import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private api:HttpClient, private router: Router) { }

  getpage(num:number):any{
    return this.api.get("https://localhost:44304/api/clients?page="+num+"&pageSize=5");
  }
  getshearch(Cliente:string,numM:string,numf:string,prenom:string,nom:string,num:number):any{
   return this.api.get("https://localhost:44304/api/clients/search?cliente="+Cliente+"&numeroDeMembro="+numM+"&numeroDeFamilia="+numf+"&prenomPer="+prenom+"&nomPer="+nom+"&page="+num+"&pageSize=5");
  }
  login(u:any): any {
    const url = "https://localhost:44304/api/User/Login";
    return this.api.post(url,u);

  }
  testlogin():any{
    const username = sessionStorage.getItem("username");
    const token = sessionStorage.getItem("token");
    const url = "https://localhost:44304/api/User/CheckTokenValidity/"+username+"/"+token;

    return this.api.get(url);
  }
  logout(){
    return this.api.delete("https://localhost:44304/api/User/Logout/"+sessionStorage.getItem("username"));
  }
  getalluser():any{
    return this.api.get("https://localhost:44304/api/User");
  }
  updateuser(user:string,u:any){
    return this.api.put("https://localhost:44304/api/User/"+user,u);
  }
  adduser(u:any){
    return this.api.post("https://localhost:44304/api/User",u);
  }
  deleteuser(user:string){
    return this.api.delete("https://localhost:44304/api/User/"+user);
  }


}
