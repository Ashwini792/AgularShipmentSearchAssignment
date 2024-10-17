import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ShipmentSearchService } from '../services/shipmentsearch.service';
import * as studentData   from '../data/shipmentList.json';
import { Shipment, Shipments } from 'src/shipment/shipmentlist.component';


@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  title = 'Shipment Search';
  studentData : any = studentData;
  shipmentData: Shipments=this.studentData.Shipments;
  filteredData!: Shipment[]


   
 ngOnInit(): void {

   
 }
 
   constructor(private shipmentSearchService: ShipmentSearchService) {
    }
   
    
    
       profileForm = new FormGroup({
         orderNo: new FormControl(''),
         shipmentNo: new FormControl(''),
         firstName: new FormControl(''),
         lastName: new FormControl(''),
         EmailID: new FormControl(''),
         phoneNumber: new FormControl('')
        });
      
       
       onSearch(filters: any) {
       // this.shipmentSearchService.
      
        this.shipmentSearchService.navigateToResultPage(filters);
      }
        
      resetForm()
      {
        this.profileForm.reset();
      }
    
}
