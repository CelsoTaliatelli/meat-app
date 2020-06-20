import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/restaurants/restaurant/product.model';

@Component({
  selector: 'meat-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  products: Product[]
  constructor() { }

  ngOnInit(): void {
    
  }

}
