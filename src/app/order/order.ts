import { IRecipe } from './recipe';
export interface IOrder {
    orderId: number;
    status: string;
    data;
    recipeId: number;
    recipe: IRecipe;
  }
  