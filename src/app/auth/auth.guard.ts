import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot, // contains future route that will be activated
    state: RouterStateSnapshot // contains future router state of application
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.checkIsLoggedIn(state.url);
  }

  checkIsLoggedIn(url: string): true | UrlTree {
    if (this.authService.isLoggedIn) {
      return true;
    }

    // store the URL the user was trying to access
    this.authService.redirectUrl = url;

    // return a UrlTree object with the url 'login'
    // so user is redirected to login page
    return this.router.parseUrl('/login');
  }
}
