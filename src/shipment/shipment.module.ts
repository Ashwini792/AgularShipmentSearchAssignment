import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShipmentRoutingModule } from './shipment-routing.module';
import { ShipmentListComponent } from './shipmentlist.component';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http'; 
import { HttpClientModule } from '@angular/common/http';
import { ShipmentDetailsComponent } from './shipmentdetails.component';
@NgModule({
  declarations: [
    ShipmentListComponent,
    ShipmentDetailsComponent
  ],
  imports: [
    CommonModule,ShipmentRoutingModule, HttpClientModule,CommonModule
  ],
  providers: [HttpClient],
  bootstrap: [ShipmentListComponent]
})
export class ShipmentModule { }
