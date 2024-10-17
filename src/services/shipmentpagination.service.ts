import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { ShipmentSearchService } from './shipmentsearch.service';
import { Shipment } from 'src/shipment/shipmentlist.component';

@Injectable({
  providedIn: 'root'
})
export class ShipmentpaginationService {


  constructor(private shipmentSearchService: ShipmentSearchService) { }
  private totalItems=this.shipmentSearchService.filteredData.length;
  getItems(page=1, itemPErPage=10) : Observable<String[]>
  
  {
const startIndex=(page-1)*itemPErPage;
const endIndex=startIndex+itemPErPage;
const items= [];
for(let i=startIndex; i< endIndex ;i++)
{
  if(i < this.totalItems)
  {
    items.push(`Shipment ${i+1}`);
  }
}
return of(items).pipe(delay(500));
  }
}

