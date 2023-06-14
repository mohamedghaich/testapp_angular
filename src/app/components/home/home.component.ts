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
  currentPage:number=1;
  client:string="";
  numM:string="";
  numf:string="";
  prenom:string="";
  nom:string="";
  selectedRow: any = null;

  constructor(private api:ApiService,private http:HttpClient){}
  ngOnInit(): void {
    this.api.getpage(1).subscribe((data:any)=>{this.tab=data});
  }
  search() {
    this.currentPage=1;
    const cliente = this.client;
    const numM = this.numM;
    const numf = this.numf;
    const prenom = this.prenom;
    const nom = this.nom;

    this.api.getshearch(cliente, numM, numf, prenom, nom, this.currentPage)
  .subscribe(
    (data: any) => {
      this.tab = data;
    },
    (error: any) => {
      console.error('Error occurred:', error);
      this.tab = null;
    }
  );

  }
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      const cliente = this.client;
    const numM = this.numM;
    const numf = this.numf;
    const prenom = this.prenom;
    const nom = this.nom;

    this.api.getshearch(cliente, numM, numf, prenom, nom, this.currentPage)
  .subscribe(
    (data: any) => {
      this.tab = data;
    })

    }
  }

  nextPage() {
    this.currentPage++;
    const cliente = this.client;
    const numM = this.numM;
    const numf = this.numf;
    const prenom = this.prenom;
    const nom = this.nom;

    this.api.getshearch(cliente, numM, numf, prenom, nom, this.currentPage)
  .subscribe(
    (data: any) => {
      this.tab = data;
    },
    (error: any) => {
      console.error('Error occurred:', error);
      this.currentPage--;
    })
  }
  selectRow(row: any) {
    this.selectedRow = row;
  }

}
