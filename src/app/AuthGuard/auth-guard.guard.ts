import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../service/auth-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthServiceService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    debugger;
    if (!this.authService.isAuthenticatedUser()) {
      this.router.navigate(['/login']);
      return false;
    }

    // Check if the user has the required role
    const expectedRole = route.data['expectedRole'] as string;
    if (!this.authService.hasUserRole(expectedRole)) {
      this.router.navigate(['/unauthorized']); // Redirect to unauthorized page or any other action
      return false;
    }

    return true; // User is authenticated and has the required role
  }
}
