import {Injectable, ErrorHandler} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import { Restaurant } from './restaurant/restaurant.model'
import {MEAT_API} from '../app.api'
import { Observable} from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {ErrorHandle} from './Helper/error-handler';
import { Product } from './restaurant/product.model';
import { Review } from '../restaurant-detail/reviews/review.model';
//import 'rxjs/operators/map'
@Injectable()
export class RestaurantsService{

    
        constructor(private http:HttpClient){}

        restaurants(): Observable<Restaurant[]>{
            return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`)
                .pipe(
                        retry(2),
                        catchError(ErrorHandle.handerError)
                    )


        }

        restaurantById(id: string): Observable<Restaurant>{
            return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`)
                .pipe(
                    retry(2),
                    catchError(ErrorHandle.handerError)
                )
        }
 
        productsByRestaurant(id:number): Observable<Product[]>{
            return this.http.get<Product[]>(`${MEAT_API}/restaurants/${id}/products`)
                    .pipe(
                        retry(2),
                        catchError(ErrorHandle.handerError)
                    )
        }

        reviewsOfRestaurant(id:number): Observable<Review[]>{
            return this.http.get<Review[]>(`${MEAT_API}/restaurants/${id}/reviews`)
                .pipe(
                    retry(2),
                    catchError(ErrorHandle.handerError)
                )
        }
}