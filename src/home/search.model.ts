export class SearchModel {
  
    constructor(
      public  orderNo: string,
      public shipmentNo: string,
      public firstName: string

    ){}
    
  }
  
  export interface PostModel {
    id: number;
    orderNo: string;
    shipmentNo: string;
    firstName: string;
    lastName: string;
  }