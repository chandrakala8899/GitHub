import { Component } from '@angular/core';
import { DepositService } from '../deposit.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrl: './deposit.component.css'
})
export class DepositComponent {
  accountNumber: string = '';  
  amount: number = 0;        
  message: string = '';       

  constructor(private depositeservice: DepositService) { }

  onDeposit() {
    const withdrawRequest = {
      accountnumber: this.accountNumber,
     
        amount: this.amount
      };
  
      this.depositeservice.deposit(withdrawRequest).subscribe(
        response => {
          this.message = response;  // Handle success message
        },
        error => {
          this.message = 'Error occurred during withdrawal';  // Handle error message
        }
      );
    }
}

