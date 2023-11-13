import { Component } from '@angular/core';
import { AuthServiceService } from './service/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'auth-angular';
  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}
  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
