import { Component } from '@angular/core';
import { AtmService } from '../atm.service';
import { Atm } from '../model/Atm';
import { Account } from '../model/Account';
import { Router } from '@angular/router';
import { Address } from '../model/Address';

@Component({
  selector: 'app-createatm',
  templateUrl: './createatm.component.html',
  styleUrl: './createatm.component.css'
})
export class CreateatmComponent {
  account:Account={
    name: '',
    mobilenumber: '',
    pan: '',
    balance: 0,
    accountnumber: '',
    address:new Address('','','','','') 
  }

  atm:Atm={
    cardNumber: '',
    pin: '',
    cvv: '',
    expiry: new Date(),
    accountnumber: '',

  }

  constructor(private atmService:AtmService,private router:Router){}
  createAtm(){
    this.atmService.createAtm(this.account).subscribe(
      response =>{
        this.atm=response;
        console.log('ATM Created ',response );
        this.router.navigate(['/atmlogin'])
      },
      error =>{
        console.error('Failed to create atm',error );
      }
    )

  }

}
