import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { MainComponent } from './components/main/main.component';

import { Routes } from './app.routing';

@NgModule({
  imports:      [
    BrowserModule,
    RouterModule.forRoot(Routes)
  ],
  exports:      [ RouterModule  ],
  declarations: [
    AppComponent,
    MainComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
