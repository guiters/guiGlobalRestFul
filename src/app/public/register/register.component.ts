import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AbstractControl} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  submitted = false;
  confirm = false;
  user = '';
  pass = '';
  passwordconfirm = '';

  constructor(private Auth: AuthService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {

  }

  validate(data) {
    if (data.pass !== data.passwordconfirm) {
      this.confirm = true;
    } else {
      this.confirm = false;
    }
  }

  onSubmit(data) {
    if (data) {
      if (data.pass !== data.passwordconfirm) {
        this.confirm = true;
      } else {
        this.confirm = false;
        this.Auth.register(data);
        // this.router.navigate(['/']);
      }
    }
  }
}
