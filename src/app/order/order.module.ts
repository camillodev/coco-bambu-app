import { AcessComponent } from './../acess/acess.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { OrderComponent } from './order.component';
import { RecipesComponent } from './recipes.component';
import { OrderService } from './order.service';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      { path:'recipes:id.', component: RecipesComponent},
      { path:'acess.', component: AcessComponent},
      { path:'order.', component: OrderComponent}
    ])
  ],
  declarations: [OrderComponent, RecipesComponent],
  providers:[OrderService]
})
export class OrderModule { }
