import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from './order.service';
import { IRecipe } from './recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  id: number;
  isDialog: boolean= false;
  infoColor: string = "#fff";
  errorMessage: string;
  @ViewChild('ingredientList') ingredientList: ElementRef;
  @ViewChild('preparationList') preparationList: ElementRef;
  dialog: any ={
    "title": "",
    "message": "",
    "buttonMessage": ""
  }

  recipe: IRecipe;
  
  constructor(private _route: ActivatedRoute, 
    private _router: Router,
    private _orderService: OrderService
  ) { }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    this._orderService.getRecipe(id)
                    .subscribe(recipe => {
                      this.recipe = recipe;                      
                    }, error => this.errorMessage = <any> error);
  }

  onBack(): void {
    this._router.navigate(['/order']);
  }

  openDialog(): void {
   
    //se ingredientes e preparo estiver tudo selecionado
    if(this.isAllChecked(this.ingredientList) && this.isAllChecked(this.preparationList)){
      this.dialog.title = "Obrigado";
      this.dialog.message = "Prato finalizado com sucesso em 23 minutos e 19 segundos!";
      this.dialog.buttonMessage = "OK";
      this.isDialog = true;
      this.infoColor = 'inherit'; //Correção de bug
    }
    else if(this.isAllChecked(this.ingredientList)){
      //abre dialog informando que começou o timer
      this.dialog.title = "Vamos Começar!";
      this.dialog.message = "Ingredientes selecionados! O Timer começou a rodar (não implementado)";
      this.dialog.buttonMessage = "Entendi";
      this.isDialog = true;
      this.infoColor = 'inherit'; //Correção de bug
      
    }
    else{
      // se não tiverem todos abre dialog dizendo pra selecionar todos
      this.dialog.message = "Para iniciar a preparação, certifique-se de que você te todos os ingredientes selecionados!";
      this.dialog.buttonMessage = "Entendi";
      this.isDialog = true;
      this.infoColor = 'inherit'; //Correção de bug
    }   
  }

  closeDialog(): void {
    this.isDialog = false;
    this.infoColor = '#fff'; //Correção de bug 
  }

  isAllChecked(list: ElementRef): boolean{
    //pega os inputs pela tag e converte para array
    var inputs = [].slice.call(list.nativeElement.getElementsByTagName('input'));
    
    return !inputs.some(function(input){
        // verifica se algum item nao esta checked
        return input.checked == false;        
    });
  } 
}
