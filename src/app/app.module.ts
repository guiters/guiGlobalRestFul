import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {PublicModule} from './public/public.module';
import {PanelModule} from './panel/panel.module';
import {AuthModule} from './auth/auth.module';
import { MaterializeModule } from 'angular2-materialize';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicModule,
    PanelModule,
    AuthModule
  ],
  exports: [
    PublicModule,
    PanelModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
