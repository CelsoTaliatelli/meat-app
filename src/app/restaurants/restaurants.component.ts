import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantsService } from './restaurants.services';

@Component({
  selector: 'meat-restaurants',
  templateUrl: './restaurants.component.html',
})
export class RestaurantsComponent implements OnInit {
  restaurants:Restaurant[]
  constructor(private restaurantsService: RestaurantsService) { }
  
  /*é chamado uma vez no ciclo de vida*/
  ngOnInit(): void {
     
      this.restaurantsService.restaurants().subscribe((restaurants : Restaurant[]) => {
      this.restaurants = restaurants});
  }

}
