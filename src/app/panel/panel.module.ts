import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PanelRoutes} from './panel-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RegisterComponent} from './register/register.component';
import {RouterModule} from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {PanelComponent} from './panel.component';
import {NewrouteComponent} from './route/newroute/newroute.component';
import {AllrouteComponent} from './route/allroute/allroute.component';
import {ApiService} from './api.service';
import {ControlContainer, FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    DashboardComponent,
    RouterModule
  ],
  declarations: [DashboardComponent, RegisterComponent, MenuComponent, PanelComponent, NewrouteComponent, AllrouteComponent],
  providers: [ApiService]
})
export class PanelModule {
}
