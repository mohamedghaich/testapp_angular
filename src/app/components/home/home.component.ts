import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  tab:any;
  constructor(private api:ApiService,private http:HttpClient){}
  ngOnInit(): void {
    this.http.get("https://localhost:44304/api/clients?page=1&pageSize=10").subscribe((data:any)=>{this.tab=data});
  }

}
