import { Component } from '@angular/core';
import { LoansearchService } from '../loansearch.service';

@Component({
  selector: 'app-loansearch',
  templateUrl: './loansearch.component.html',
  styleUrl: './loansearch.component.css'
})
export class LoansearchComponent {
  accountnumber:string='';
  pan:string='';
  balance:number=0;
  balanceAmount:number=0;
  accounts: any[] = [];
  lowerRange!: number;
  upperRange!: number;

  constructor(private loansearch:LoansearchService){}


  searchaccount(){
    console.log("Inpu Account Number" +this.accountnumber);
    this.loansearch.searchAccount(this.accountnumber).subscribe(
      data =>  {
        this.accountnumber=data.accountnumber
    console.log(" search Account" +JSON.stringify(data));
      }
    )
  }

  searchaccountbyAccountNumberAndPan(){
      console.log("Inpu Account Number" +this.accountnumber,this.pan);
      this.loansearch.getAccountByAccountAndPan(this.accountnumber,this.pan).subscribe(
        data =>  {
          // this.accountnumber=data.accountnumber,
          // this.pan=data.pan,
      console.log(" search Account" +JSON.stringify(data));
        }
      )
    }

    searchAccountByBalance(){
      console.log("Inpu Balance Amount" +this.balance);
      this.loansearch.searchAccountByBalance(this.balance).subscribe(
       response =>{
        this.accounts=response;
        console.log(JSON.stringify(this.accounts));
       }
      )

    }

    searchAccountByBalanceGreater(){
      console.log("Inpu Balance Amount" +this.balanceAmount);
      this.loansearch.searchAccountByBalance(this.balanceAmount).subscribe(
       response =>{
        this.accounts=response;
        console.log(JSON.stringify(this.accounts));
       }
      )

    }

    searchAccountByBalanceRange(){
      console.log("Inpu Lower Range" +this.lowerRange + 'Input Upper Range '+this.upperRange);
      this.loansearch.searchAccountByBalanceRange(this.lowerRange,this.upperRange).subscribe(
        response =>{
          this.accounts=response;
          console.log(JSON.stringify(this.accounts))
        },
        error=>{
          console.log("Error Fetching Accounts " +error)
        }
      )

    }

  }