import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class Logout implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {
  }

  canActivate(): boolean {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token')
      this.router.navigateByUrl('/');
      return false;
    } else {
      return true;
    }
  }
}
