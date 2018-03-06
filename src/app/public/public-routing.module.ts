import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {LoginRedirect} from '../auth/login-redirect.service';
import {RegisterComponent} from '../public/register/register.component';

export const PublicRoutes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [LoginRedirect]
  }, {
    path: 'register',
    component: RegisterComponent,
    canActivate: [LoginRedirect]
  }
];
