import { Address } from "./Address";
export class Account{
    name:string;
    mobilenumber:string;
    pan:string;
    accountnumber:String;
    balance:number;
 address:Address;

    constructor( name:string ,mobilenumber:string,pan:string,balance:number,accountnumber:string,address:Address){
     this.accountnumber =  accountnumber;
     this.pan =  pan;
     this.balance =  balance;
     this.mobilenumber =  mobilenumber;
     this.name =  name;
     this.address=address;
  }
}