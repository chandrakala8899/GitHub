export class Transfer{
    fromAccount:string;
    toAccount:string;
    amount:number;


    constructor(fromAccount:string,
        toAccount:string,
        amount:number
    ){
       this.fromAccount=fromAccount;
       this.toAccount=toAccount;
       this.amount=amount;
    }
}