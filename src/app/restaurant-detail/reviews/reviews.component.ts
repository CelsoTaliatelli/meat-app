import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'src/app/restaurants/restaurants.services';

@Component({
  selector: 'meat-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  constructor(RestaurantService:RestaurantsService) { }

  ngOnInit(): void {
  }

}
