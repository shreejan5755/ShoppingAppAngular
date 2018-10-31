import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable()
export class RecipeService {
    // for direct transfer of event between recipe-item component and recipe detail
    recipeSelected = new EventEmitter<Recipe>();

    // Recipe model is used here
    private recipes: Recipe[] = [
        new Recipe(
            'Beef fillet',
            'Tasty juicy beef fillet',
            'https://c.pxhere.com/photos/8b/0f/food_meat_recipe_power_pork_dishes-604134.jpg!d',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Garlic', 2),
                new Ingredient('Onion', 3)
            ]),
        new Recipe(
            'Chicken & Nann ',
            ' Finger licking chicken and butter naan',
            'https://upload.wikimedia.org/wikipedia/commons/f/f5/Handi-chicken-recipe.jpg',
            [
                new Ingredient('Chicken', 1),
                new Ingredient('Naan', 2),
                new Ingredient('Chicken Stock', 2),
                new Ingredient('Vege', 5)
            ])
    ];

    // injecting one service into another
    constructor( private _shoppingListService: ShoppingListService) {}

    getRecipes() {
        // by using slice we send a copy of the recipes array instead of the refrence of recipes array
        // this will keep our recipes array safe ( it can't be accessed from outside)
        return this.recipes.slice();
    }

    getRecipeById(id: number) {
        return this.recipes[id];
    }

    // method to send the ingredients of the clicked recipe to the shopping list
    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this._shoppingListService.addIngredients(ingredients);
    }
}
