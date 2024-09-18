import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { Address } from './model/Address';
import { Rating } from './model/Rating';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  private addressSource = new BehaviorSubject<Address>(new Address('add1','add2','Hyderabad','TS','500048'));
  private ratingSource = new BehaviorSubject<Rating>(new Rating(4,'available'));

  address$ = this.addressSource.asObservable();
  rating$ = this.ratingSource.asObservable();

  updateAddress(address: Address) {
    this.addressSource.next(address);
  }

  updateRating(rating: Rating) {
    this.ratingSource.next(rating);
  }
}
