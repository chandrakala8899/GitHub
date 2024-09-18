export class Atm{
    cardNumber:string;
    pin:string
    cvv:string
    expiry:Date;
    accountnumber:string;

    constructor( cardNumber:string,pin:string,cvv:string,expiry:Date,accountnumber:string){
        this.cardNumber=cardNumber;
        this.pin=pin;
        this.cvv=cvv;
        this.expiry=expiry;
        this.accountnumber=accountnumber;
    }
}
