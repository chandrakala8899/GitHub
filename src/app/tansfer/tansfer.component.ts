import { Component } from '@angular/core';
import { TransferService } from '../transfer.service';
import { Transfer } from '../model/Transfer';

@Component({
  selector: 'app-tansfer',
  templateUrl: './tansfer.component.html',
  styleUrl: './tansfer.component.css'
})
export class TansferComponent {
  transfer:Transfer={
    fromAccount:'',
    toAccount: '',
    amount: 0
  }

  constructor(private transferService:TransferService){}

  transferAmount(){
 
    this.transferService.transferAmount(this.transfer).subscribe(
      response =>{
        console.log('Transfer Successful :' +response)
      },
      error =>{
 
        console.log('Transfer failed :' +error);
      }
    )

  }
}
