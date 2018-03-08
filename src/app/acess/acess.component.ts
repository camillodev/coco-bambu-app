import { Component, OnInit } from "@angular/core";
import {  Router } from "@angular/router";


@Component({
  selector: 'app-acess',
  templateUrl: './acess.component.html',
  styleUrls: ['./acess.component.css']
})
export class AcessComponent implements OnInit {
  user: string = "tagme";
  password: string = "admin";  
  isDialog: boolean = true;
  pedidoNumber: number = 1;
  
  login(username:string, password:string): void {
    //Um app real eu criaria um serviço para acess, e no serviço verificaria o login e senha com o banco de dados
    if(username == this.user && password == this.password){
        this._router.navigate(['/order']);
    }else {
      alert("Usuario e senha errada");
    }
  }

 
  
  constructor(private _router: Router) { }

  ngOnInit(){
    
  }

  

  
}