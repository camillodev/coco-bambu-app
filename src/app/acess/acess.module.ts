import { RecipesComponent } from './../order/recipes.component';
import { OrderComponent } from './../order/order.component';
import { NgModule,  OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcessComponent } from './acess.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path:'order', component: OrderComponent},
      { path:'recipes/:id', component: RecipesComponent}
    ])
  ],
  declarations: [
    AcessComponent
  ],
  exports: [
    AcessComponent
  ],
  providers: [
  ]
})
export class AcessModule implements OnInit {
  
  ngOnInit() {
    
  }
}
