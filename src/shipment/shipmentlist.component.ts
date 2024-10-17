import { Component, inject, Input, OnChanges, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ShipmentSearchService } from 'src/services/shipmentsearch.service';
import { ShipmentpaginationService } from 'src/services/shipmentpagination.service';
import { ShipmentStatusService } from 'src/services/shipmentstatus.service';
import { Location } from '@angular/common';


export interface Shipments {
  TotalNumberOfRecords: string
  Shipment: Shipment[]
}

export interface Shipment {
  AssignedToUserId: string
  DeliveryMethod: string
  ExpectedShipmentDate: string
  OrderNo: string
  ScacAndService: string
  ShipNode: string
  ShipmentKey: string
  ShipmentNo: string
  Status: string
  BillToAddress: BillToAddress
  ShipmentLines: ShipmentLines
}

export interface BillToAddress {
  DayPhone: string
  EmailID: string
  FirstName: string
  LastName: string
  PersonInfoKey: string
}
export interface ShipmentLines {
  TotalNumberOfRecords: string
}

@Component({
  selector: 'shipmentlist-root',
  templateUrl: './shipmentlist.component.html',
  styleUrls: ['./shipmentlist.component.css']
})
export class ShipmentListComponent implements OnInit{
  title = 'Shipment';
  enableFilter=false;
  //studentData : any = studentData;
  shipmentData: Shipment[] = [];
  filteredShipments: Shipment[] =[];
  users!: Shipments;
  filteredUsers!: Shipments;
  filterValues:any;
  items: String[]=[];
  isLoading = false;
  currentPage=1;
  itemsPerPage=10;
  shipmentStatus: [] = [];
  selectedStatus: any=[];
  checkedStatus!: Set<String>;

  toggleLoading = ()=>this.isLoading = !this.isLoading;
  loadData = () =>
  {
    this.toggleLoading();
    this.shipmentpaginationService.getItems(this.currentPage, this.itemsPerPage).subscribe({

      next:response=>this.items = response,
      error:err=>console.log(err),
      complete:()=>this.toggleLoading()
    })
  }
  

  constructor(private shipmentSearchService: ShipmentSearchService, private shipmentpaginationService: ShipmentpaginationService, public shipmentStatusService: ShipmentStatusService, private location: Location){
    this.shipmentData=this.shipmentSearchService.filteredData;
  }
  appendData = ()=>
  {
    this.toggleLoading();
    this.shipmentpaginationService.getItems(this.currentPage, this.itemsPerPage).subscribe({

      next:response=>this.items = [...this.items,...response],
      error:err=>console.log(err),
      complete:()=>this.toggleLoading()
    })
  }

ngOnInit()
{
  this.loadData();
}
onScroll = ()=>
{
this.currentPage++;
this.appendData();
}
status=[
  {id:1, select:false, name:"Ready for Backroom Pick"},
  {id:2, select:false, name:"Backroom Pick In Progress"},
  {id:3, select:false, name:"Ready for Customer Pickup"},
  {id:4, select:false, name:"Picked"},
  {id:5, select:false, name:"Ready for Packing"},
  {id:6, select:false, name:"Packing In Progress"},
  {id:7, select:false, name:"Packed"},
  {id:8, select:false, name:"Shipped"},
  {id:9, select:false, name:"Cancelled"}

];
onChangeStatus(event:any)
{
  this.checkedStatus= new Set();
  const id=event.target.value;
  const isChecked=event.target.checked;
 this.status.map((d)=>
{
  if(d.id == id)
  {
    d.select=isChecked;
    return d;
  }
  return d;
});
this.status.map((d)=>
{
  if(d.select)
  {
    this.checkedStatus.add(d.name);
  }
})
}

filterByStatus()
{
  console.log("size"+this.checkedStatus.size);
  if(this.checkedStatus.size ===0)
  {
    this.shipmentData=this.shipmentSearchService.filteredData;
    return;
  }
for(let shipment of this.shipmentSearchService.filteredData)
{
if(this.checkedStatus.has(shipment.Status))
{
  //console.log("filtered shipment"+shipment.ShipmentNo);
this.filteredShipments.push(shipment);
}
}
this.shipmentData=this.filteredShipments;
this.filteredShipments=[];
}
filterClick()
{
  this.enableFilter=!this.enableFilter;
}
goBack()
{
  this.location.back();

}
resetData()
{
  this.status.map((d)=>
  {
d.select=false;
});
this.shipmentData=this.shipmentSearchService.filteredData;
}
}



