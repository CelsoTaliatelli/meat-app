import { MenuComponent } from '../menu/menu.component';
import { Product } from 'src/app/restaurants/restaurant/product.model';
export class CartItem{
    constructor(private menuItem: Product,
        private quantity: number = 1){}
    value(): number{
        return this.menuItem.price * this.quantity
    }
}