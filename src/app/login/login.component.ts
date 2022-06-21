import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  message: string | undefined;

  constructor(public authService: AuthService, private router: Router) {
    this.message = this.getMessage();
  }

  getMessage() {
    return 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'Logging in...';
    this.authService.login().subscribe(() => {
      this.message = this.getMessage();
      if (this.authService.isLoggedIn) {
        const redirectUrl = this.authService.redirectUrl;
        if (redirectUrl) {
          // pass on global query params and fragment
          const navigationExtras: NavigationExtras = {
            queryParamsHandling: 'preserve',
            preserveFragment: true,
          };

          this.router.navigate([redirectUrl], navigationExtras);
        }
      }
    });
  }

  logout() {
    this.authService.logout();
    this.message = this.getMessage();
  }
}
