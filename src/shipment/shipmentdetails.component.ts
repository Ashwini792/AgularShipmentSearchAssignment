import { Component, OnInit } from "@angular/core";
import { ShipmentSearchService } from "src/services/shipmentsearch.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";
import * as shipmentDetailsDataFromJson   from '../data/shipmentDetails.json';
import { CommonModule } from '@angular/common';


export interface Root {
    Shipment: Shipment
  }
  
  export interface Shipment {
    AssignedToUserId: string
    Status: string
    DeliveryMethod: string
    ExpectedShipmentDate: string
    OrderNo: string
    ScacAndService: string
    ShipmentKey: string
    ShipmentNo: string
    BillToAddress: BillToAddress
    ToAddress: ToAddress
    ShipmentLines: ShipmentLines
  }
  
  export interface BillToAddress {
    FirstName: string
    LastName: string
    EmailID: string
    Phonenumber: string
    AddressID: string
    AddressLine1: string
    AddressLine2: string
    City: string
    Country: string
    State: string
    ZipCode: string
    PersonInfoKey: string
  }
  
  export interface ToAddress {
    FirstName: string
    LastName: string
    EmailID: string
    DayPhone: string
    AddressID: string
    AddressLine1: string
    AddressLine2: string
    City: string
    Country: string
    State: string
    ZipCode: string
    PersonInfoKey: string
  }
  
  export interface ShipmentLines {
    TotalNumberOfRecords: string
    ShipmentLine: ShipmentLine[]
  }
  
  export interface ShipmentLine {
    Quantity: string
    ShipmentLineKey: string
    OrderLine: OrderLine
  }
  
  export interface OrderLine {
    ItemDetails: ItemDetails
  }
  
  export interface ItemDetails {
    DisplayUnitOfMeasure: string
    Description: string
    ImageUrl: string
    ItemID: string
  }


@Component({
    selector: 'shipmentdetails-root',
    templateUrl: './shipmentdetails.component.html',
    styleUrls: ['./shipmentdetails.component.css']
  })

 
  export class ShipmentDetailsComponent implements OnInit
  {
    title = 'Shipment List';
    showInfo= false;
    hideInfo=true;
    shipmentData!: Shipment;
    selectedShipmentNo!: string; 
    shipmentDetailsData : any = shipmentDetailsDataFromJson;
    shipmentDataDetails: Shipment=this.shipmentDetailsData.Shipment;
    shipmentLine=this.shipmentDataDetails.ShipmentLines.ShipmentLine
    constructor(private shipmentSearchService: ShipmentSearchService, private activatedRouter: ActivatedRoute, private location: Location, private router: Router){
        this.shipmentData=this.shipmentDataDetails;
        console.log("shipment details"+this.shipmentData);
        this.selectedShipmentNo=this.activatedRouter.snapshot.params["shipmentNo"];
        console.log("selected shipment no"+this.selectedShipmentNo);
        if( this.selectedShipmentNo !== null &&  this.selectedShipmentNo !== '')
        {
        this.shipmentData=this.shipmentDataDetails;
        }
    }
  

ngOnInit()
{
   
}

goBack()
{
  this.location.back();

}
navigatehome()
{
this.router.navigate(['home']);
}
showMoreInfo()
{
    this.showInfo= !this.showInfo;
    this.hideInfo=!this.hideInfo;
}
hideMoreInfo()
{
    this.showInfo= !this.showInfo;
    this.hideInfo=!this.hideInfo;
}
    
  }