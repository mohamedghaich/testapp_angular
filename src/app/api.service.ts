import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private api:HttpClient) { }

  getpage(num:number):any{
    return this.api.get("https://localhost:44304/api/clients?page="+num+"&pageSize=10");
  }
  getshearch(Cliente:string,numM:string,numf:string,prenom:string,nom:string,num:number):any{
   return this.api.get("https://localhost:44304/api/clients/search?cliente="+Cliente+"&numeroDeMembro="+numM+"&numeroDeFamilia="+numf+"&prenomPer="+prenom+"&nomPer="+nom+"&page="+num+"&pageSize=10");
  }

}
