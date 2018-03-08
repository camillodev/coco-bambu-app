import { AcessComponent } from './acess/acess.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AcessModule } from './acess/acess.module';
import { OrderModule } from './order/order.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AcessModule,
    OrderModule,
    RouterModule.forRoot([
      { path: 'acess', component: AcessComponent },
      { path: '', redirectTo: 'acess', pathMatch: 'full'},
      { path: '**', redirectTo: 'acess', pathMatch: 'full'}
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
