import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../service/auth-service.service';

@Injectable({
  providedIn: 'root',
})
export class ChildAuthGuardGuard implements CanActivateChild {
  constructor(private authService: AuthServiceService, public router: Router) {}
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (!this.authService.isAuthenticatedUser()) {
      this.router.navigate(['./login']);
      return false;
    }

    let expectedRole = childRoute.data['expectedRole'] as string;
    if (!this.authService.hasUserRole(expectedRole)) {
      this.router.navigate(['/unauthorized']);
      return false;
    }
    return true;
  }
}
