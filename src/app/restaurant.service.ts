import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restaurant } from './model/Resaturant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private api = "http://localhost:8080/api/restaurants";
  

  constructor(private httpclient:HttpClient) { 
    
  }
  addRestaurant(restaurant: Restaurant): Observable<Object> {
    const httpOptions ={
      headers: new HttpHeaders({
        'Name': 'Restaurant',
         'Content-Type': 'application/json',
        'Accept': 'application/json'
       })
     };
     return this.httpclient.post(this.api,restaurant,httpOptions)
  }

}
