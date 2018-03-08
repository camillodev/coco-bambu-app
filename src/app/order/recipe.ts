export interface IRecipe {
  recipeId: number;
  title: string;
  imageUrl: {
    small;
    big;
  };
  description: string;
  ingredients: string[];
  preparation: [{
    order;
    description;
  }];
  time;
}
