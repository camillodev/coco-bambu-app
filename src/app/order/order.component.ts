import { OrderService } from './order.service';
import { IRecipe } from './recipe';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IOrder } from './order';

@Component({
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  errorMessage: string;
  _listFilter: string;
  filteredOrders: IOrder[];
  orders: IOrder[] = [];

  constructor(private _router: Router, private _orderService: OrderService) {  }

  ngOnInit() {

    let service = this._orderService;
    service.getOrders()
      .subscribe(orders => {
        orders.forEach(function (order) {
          service.getRecipe(order.recipeId)
            .subscribe(recipe => {
              order.recipe = recipe;
            }, error => this.errorMessage = < any > error);
        })
        this.orders = orders;
        this.filteredOrders = this.orders;
      }, error => this.errorMessage = < any > error)

  }

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredOrders = this.listFilter ? this.performFilter(this.listFilter) : this.orders;
  }

  performFilter(filterBy: string): IOrder[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.orders.filter((product: IOrder) =>
          product.recipe.title.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  openRecipe(id: number) {
    this._router.navigate(['/recipes/', id]);
  }

}
