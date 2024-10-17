import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShipmentListComponent } from './shipmentlist.component';
import { ShipmentDetailsComponent } from './shipmentdetails.component';

const routes: Routes = [
  
   {path: 'list', component: ShipmentListComponent},
    {path: 'details/:shipmentNo', component: ShipmentDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShipmentRoutingModule { }
