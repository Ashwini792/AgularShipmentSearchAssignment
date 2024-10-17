import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { USERS } from '../data/users.data';
import * as shipmentListData   from '../data/shipmentList.json';
import { Shipment, Shipments } from 'src/shipment/shipmentlist.component';
import { Router } from '@angular/router';

@Injectable()
export class ShipmentSearchService {

  setGroupFilter$ = new Subject<any>();
  getGroupFilter = this.setGroupFilter$.asObservable();
  studentData : any = shipmentListData;
  shipmentData: Shipments=this.studentData.Shipments;
  filteredData!: Shipment[]
  shipmentbyShipmentNumber!: Shipment;

  constructor(private router : Router) {}
  navigateToResultPage(filters: any)
  {
  this.filteredData=this.filterShipments(filters);
  console.log("filtered data size "+ this.filteredData.length);
  if(this.filteredData.length >1)
  {
    this.router.navigate(['shipment/list']);
  }
  if(this.filteredData.length ==1)
    {
      this.router.navigate(['shipment/details',this.filteredData[0].ShipmentNo]);
    }
  
  }

  filterShipments(filters: any): Shipment[]
  {
    if(!filters || !filters.orderNo && !filters.shipmentNo && !filters.firstName 
      && !filters.lastName && !filters.EmailID && !filters.phoneNumber
    ) return this.shipmentData.Shipment;
    return this.shipmentData.Shipment.filter((shipment) => {
      return (!filters.orderNo || shipment.OrderNo === filters.orderNo ) &&
          (!filters.shipmentNo || shipment.ShipmentNo === filters.shipmentNo)  &&
          (!filters.firstName || shipment.BillToAddress.FirstName === filters.firstName) &&
          (!filters.lastName || shipment.BillToAddress.LastName === filters.lastName) &&
          (!filters.EmailID || shipment.BillToAddress.EmailID === filters.EmailID) &&
          (!filters.phoneNumber || shipment.BillToAddress.DayPhone === filters.phoneNumber);
    })
  }
  findByShipmentNumber(shipmentNo : string): Shipment
  {
    for(let shipment of this.shipmentData.Shipment)
    {
if(shipment.ShipmentNo === shipmentNo)
{
  this.shipmentbyShipmentNumber=shipment;
}
    }
    return  this.shipmentbyShipmentNumber;
  }
}