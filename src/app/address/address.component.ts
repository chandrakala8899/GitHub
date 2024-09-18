import { Component, Input, output } from '@angular/core';
import { Address } from '../model/Address';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent {
  address={
    add1:'',
    add2:'',
    pincode:'',
    state:'',
    city:''

  }

 // @Input()
 // address: Address = new Address('','','','','')

  //constructor(private dataService: DataserviceService) {}

  updateAddress() {
    //this.dataService.updateAddress(this.address);
  }
  
  
  }

