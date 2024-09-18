import { Component } from '@angular/core';
import { Account } from '../model/Account';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import { Address } from '../model/Address';
import { AddressComponent } from '../address/address.component';



@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrl: './createaccount.component.css'
})
export class CreateaccountComponent {
accountNumber:string="Test";
responseFlag:boolean=false;
account=new Account('','','',0,'',new Address('','','','',''));
constructor(private service:AccountService,private router:Router){}

createAccount(custaddress:AddressComponent){
  console.log("   custaddress  " + JSON.stringify(custaddress));
  this.account.address=custaddress.address;
  console.log(" Account Creation"+JSON.stringify(this.account));
  this.service.createAccount(this.account).subscribe(
    data =>{
      this.responseFlag=true;
      this.accountNumber= data.accountNumber;
      this.router.navigate(['/createatm'])
      console.log(JSON.stringify(data))
      console.log(this.responseFlag)
      this.account=data;
    }
  )
}
}
