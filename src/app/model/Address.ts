export class Address{
    add1:string;
    add2:string;
    city:string;
    state:string;
    pincode:string;



    constructor(add1:string,add2:string,city:string,
        state:string,pincode:string){
            this.add1= add1;
            this.add2=add2;
            this.city=city;
            this.state=state;
            this.pincode=pincode;

    }
}