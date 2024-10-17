import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeRoutingModule } from './home-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { ReactiveFormsModule } from '@angular/forms';
import {ShipmentSearchService} from '../services/shipmentsearch.service'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
;
@NgModule({
  declarations: [
    HomeComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [ShipmentSearchService],
  bootstrap: [AppComponent]
})
export class HomeModule { }
