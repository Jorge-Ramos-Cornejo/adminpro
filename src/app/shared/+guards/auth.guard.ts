import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlSegment
} from '@angular/router';
import {AuthenticationService} from '../+services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    try {
      const token = localStorage.getItem('currentUser');
      if (token) {
        if (this.authService.isTokenExpired()) {
          this.router.navigate(['/login']);
          return false;
        }
        return true;

      }

      this.router.navigate(['/login']);
      return false;
    } catch (err) {
      console.error(err);
    }
  }

}
