import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthService} from './auth.service';
import {HttpClientModule} from '@angular/common/http';
import {EnsureAuthenticated} from './ensure-authenticated.service';
import {LoginRedirect} from './login-redirect.service';
import {Logout} from './logout.service';
import {ApiService} from './api.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [ApiService, AuthService, EnsureAuthenticated, LoginRedirect, Logout]
})
export class AuthModule {
}
