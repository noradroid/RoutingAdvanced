import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  NavigationExtras,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
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

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.canActivate(childRoute, state);
  }

  checkIsLoggedIn(url: string): true | UrlTree {
    if (this.authService.isLoggedIn) {
      return true;
    }

    // store the URL the user was trying to access
    this.authService.redirectUrl = url;

    // create a dummy session id
    const sessionId = 123456789;

    // set a navigationExtras object that contains global query params and fragment
    const navigationExtras: NavigationExtras = {
      queryParams: { session_id: sessionId },
      fragment: 'anchor',
    };

    // return a UrlTree object with the url 'login'
    // so user is redirected to login page
    // return this.router.parseUrl('/login');

    // we need to use createUrlTree to send with extras
    return this.router.createUrlTree(['/login'], navigationExtras);
  }
}
