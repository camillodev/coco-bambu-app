import { IOrder } from './order';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { IRecipe } from './recipe';

@Injectable()
export class OrderService {
  private _recipesUrl = '/assets/api/recipes.json';
  private _ordersUrl = '/assets/api/orders.json';

  constructor(private _http: HttpClient) { }


  getRecipes(): Observable<IRecipe[]> {
    
    return this._http.get<IRecipe[]> (this._recipesUrl)      
      .catch(this.handleError);
  }

  getRecipe(id: number): Observable<IRecipe> {
    return (this.getRecipes().map((recipes: IRecipe[]) => recipes.find(r => r.recipeId == id)));
  }
  
  getOrders(): Observable<IOrder[]> {
    
    return this._http.get<IOrder[]> (this._ordersUrl)
      .catch(this.handleError);
  }

  getOrder(id: number): Observable<IOrder> {
    return this.getOrders().map((orders: IOrder[]) => orders.find(o => o.orderId == id));
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof Error) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return Observable.throw(errorMessage);
  }


}
