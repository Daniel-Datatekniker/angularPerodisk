import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeriodicComponent } from './periodic/periodic.component';
import { ModalModule } from '../app/_modal';



@NgModule({
  declarations: [
    AppComponent,
    PeriodicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
