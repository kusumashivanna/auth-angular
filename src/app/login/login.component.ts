import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthServiceService } from '../service/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    private authService: AuthServiceService
  ) {}
  invalidCredentialMsg: string | undefined;
  username: string | undefined;
  password: string | undefined;
  retUrl: string = 'home';
  ngOnInit(): void {}
  onFormSubmit(loginForm: any) {
    debugger;
    this.authService.login(loginForm.value);
  }
}
