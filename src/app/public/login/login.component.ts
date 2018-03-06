import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = '';
  pass = '';

  constructor(private router: Router, private Auth: AuthService) {
  }

  ngOnInit() {
  }

  onSubmit(data) {
    if (data) {
      const result = (this.Auth.login(data));
      result.then(res => {
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/panel');
      });
    }
  }
}
