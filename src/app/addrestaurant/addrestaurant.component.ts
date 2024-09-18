import { Component } from '@angular/core';
import { Restaurant } from '../model/Resaturant';
import { Rating } from '../model/Rating';
import { Address } from '../model/Address';
import { DataserviceService } from '../dataservice.service';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-addrestaurant',
  templateUrl: './addrestaurant.component.html',
  styleUrl: './addrestaurant.component.css'
})
export class AddrestaurantComponent {

  restaurant: Restaurant;
  stars: number[] = [1, 2, 3, 4, 5];

  constructor(
    private dataService: DataserviceService,
    private restaurantService: RestaurantService
  ) {

    this.restaurant = new Restaurant(
      'Mehfil',
      new Address('add1', 'add2', 'Hyderabad', 'TS', '500048'),
      new Rating(4, 'Available')
    );


    this.dataService.address$.subscribe(
      (address: Address) => this.restaurant.address = address
    );

    this.dataService.rating$.subscribe(
      (rating: Rating) => this.restaurant.rating = rating
    );
  }




  addRestaurant(): void {
    console.log('From Restaurant: ' + JSON.stringify(this.restaurant));

    this.restaurantService.addRestaurant(this.restaurant)
      .subscribe(
        (response) => {
          if (response) {
            console.log('Restaurant added successfully', response);
          } else {
            console.error('Received null response from the API');
          }
        },
        (error) => {
          console.error('Error adding restaurant', error);
        }
      );
  }
}


