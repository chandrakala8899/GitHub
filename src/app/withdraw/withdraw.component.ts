import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WithdrawService } from '../withdraw.service';


@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrl: './withdraw.component.css'
})
export class WithdrawComponent {
 
  accountnumber: string = '';
 
  amount: number = 0;
  message: string = '';


  
  constructor(private withdrawService: WithdrawService) { }

  onWithdraw() {
    const withdrawRequest = {
    accountnumber: this.accountnumber,
   
      amount: this.amount
    };

    this.withdrawService.withdraw(withdrawRequest).subscribe(
      response => {
        this.message = response;  // Handle success message
      },
      error => {
        this.message = 'Error occurred during withdrawal';  // Handle error message
      }
    );
  }
  }

