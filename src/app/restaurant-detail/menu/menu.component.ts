import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'src/app/restaurants/restaurants.services';
import { Product } from 'src/app/restaurants/restaurant/product.model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'meat-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  
  products:Observable<Product[]>
  constructor(private restaurantServices:RestaurantsService,
              private route:ActivatedRoute) { }
  ngOnInit(): void {
    this.products = this.restaurantServices.productsByRestaurant(this.route.parent.snapshot.params['id']);
  }
  
  addMenuItem(product: Product){
    console.log(product)
  }

}
