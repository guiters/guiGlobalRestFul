import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PublicRoutes} from './public/public-routing.module';
import {PanelRoutes} from './panel/panel-routing.module';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  ...PublicRoutes,
  ...PanelRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
