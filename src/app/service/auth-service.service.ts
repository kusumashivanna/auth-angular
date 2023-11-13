import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  private isAuthenticated: boolean = false;
  private userRoles: string[] = [];

  constructor(public router: Router) {}
  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  // Logic to check if the user has a specific role
  hasUserRole(expectedRole: string): boolean {
    return this.userRoles.includes(expectedRole);
  }

  // Simulate login and set user roles
  login(loginForm: any) {
    debugger;
    this.isAuthenticated = true;
    if (loginForm.username == 'kusuma' && loginForm.password == '123456') {
      this.userRoles = ['admin']; // Set user roles after login
      this.router.navigate(['/home']);
    } else {
      this.userRoles = ['users'];
    }
  }

  // Simulate logout
  logout() {
    this.isAuthenticated = false;
    this.userRoles = [];
  }
}
