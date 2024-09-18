import { Address } from "./Address";
import { Rating } from "./Rating";


export class Restaurant{
    name:string;
    address:Address;
    rating:Rating;

    constructor(name:string,address:Address,rating:Rating){
        this.address = address;
        this.name=name;
        this.rating = rating;
        
    }
}