import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Smarteditor2Module } from "./smarteditor2/smarteditor2.module";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Smarteditor2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
