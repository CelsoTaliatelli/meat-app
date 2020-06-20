import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'src/app/restaurants/restaurants.services';
import{ActivatedRoute} from '@angular/router'
import { Observable } from 'rxjs';

@Component({
  selector: 'meat-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews: Observable<any>
  constructor(private restaurantsService:RestaurantsService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.reviews = this.restaurantsService
    .reviewsOfRestaurant(this.route.parent.snapshot.params['id'])
  }

}
