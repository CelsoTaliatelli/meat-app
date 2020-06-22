import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/restaurants/restaurant/product.model';

@Component({
  selector: 'meat-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
 @Input() products: Product
 @Output() add = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    
  }
  emitAddEvent(){
    this.add.emit(this.products)
  }

}
