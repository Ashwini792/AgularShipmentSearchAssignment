import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'shipment', 
    loadChildren: () => import('../shipment/shipment.module').then(x => x.ShipmentModule), data : {name :"Ashu"}
   //  loadChildren: './shipment/shipment.module#ShipmentModule'
   },
   {path:'**', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
