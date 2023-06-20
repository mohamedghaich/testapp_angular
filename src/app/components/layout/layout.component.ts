import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  constructor(private api: ApiService, private router: Router) {}

  logout(): void {
    this.api.logout().subscribe(() => {
      sessionStorage.clear();
      this.router.navigate(['/login']);
    });
  }

  get isAdmin(): boolean {
    const role = sessionStorage.getItem('role');
    return role === 'admin';
  }
}
