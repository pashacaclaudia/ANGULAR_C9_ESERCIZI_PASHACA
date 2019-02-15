import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; //Aggiungiamo qui 

NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule, NgModule, NgbModule//Aggiungiamolo qui
  ],
  providers: [],
  bootstrap: [AppComponent]
})

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
