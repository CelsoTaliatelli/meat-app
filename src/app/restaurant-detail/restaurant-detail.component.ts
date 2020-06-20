import { Component, OnInit } from '@angular/core';
import {RestaurantsService} from '../restaurants/restaurants.services';
import { Restaurant } from '../restaurants/restaurant/restaurant.model';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'meat-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  constructor(private restaurantsService: RestaurantsService,
    private route: ActivatedRoute) { }
  restaurant : Restaurant
  ngOnInit(): void {
    this.restaurantsService.restaurantById(this.route.snapshot.params['id']).subscribe((restaurant : Restaurant) => {
      this.restaurant = restaurant});
  }

}
