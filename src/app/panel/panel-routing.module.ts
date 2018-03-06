import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from '../public/login/login.component';
import {LoginRedirect} from '../auth/login-redirect.service';
import {DashboardComponent} from './dashboard/dashboard.component';
import {EnsureAuthenticated} from '../auth/ensure-authenticated.service';
import {PanelComponent} from './panel.component';
import {NewrouteComponent} from './route/newroute/newroute.component';
import {AllrouteComponent} from './route/allroute/allroute.component';

export const PanelRoutes: Routes = [
  {
    path: 'panel',
    component: PanelComponent,
    canActivate: [EnsureAuthenticated],
    children: [
      {
        path: '',
        component: DashboardComponent,
        canActivate:
          [EnsureAuthenticated]
      },
      {
        path: 'new-route',
        component: NewrouteComponent,
        canActivate:
          [EnsureAuthenticated]
      },
      {
        path: 'all-route',
        component: AllrouteComponent,
        canActivate:
          [EnsureAuthenticated]
      }
    ]
  }
];
