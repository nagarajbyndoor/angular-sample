import { Component } from '@angular/core';
import { AuthService } from '../shared/auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent  {

  public isloggedIn: boolean;

  constructor(private authService: AuthService, private router: Router) {
    authService.isAuthenticated()
      .subscribe(
        success => this.isloggedIn = success
      );
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/sign-in']);
  }

}
