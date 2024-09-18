import { Component } from '@angular/core';
import { LoansearchService } from '../loansearch.service';

@Component({
  selector: 'app-loansearch',
  templateUrl: './loansearch.component.html',
  styleUrl: './loansearch.component.css'
})
export class LoansearchComponent {
  accountnumber:string='';
  constructor(private loanservice:LoansearchService){

  }

  searchaccount(){
    console.log("Inpu Account Number" +this.accountnumber);
    this.loanservice.searchaccount(this.accountnumber).subscribe(
      data =>  {
    console.log(" search Account" +JSON.stringify(data));
      }
    )
  

  }

}
