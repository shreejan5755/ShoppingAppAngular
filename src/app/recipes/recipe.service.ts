import { Recipe } from './recipe.model';

export class RecipeService {
    // Recipe model is used here
    private recipes: Recipe[] = [
        new Recipe('A test recipe', 'its simply a test',
         'https://c.pxhere.com/photos/8b/0f/food_meat_recipe_power_pork_dishes-604134.jpg!d'),
        new Recipe('A test recipe 2', 'testing 2', 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Handi-chicken-recipe.jpg')
    ];

    getRecipes() {
        // by using slice we send a copy of the recipes array instead of the refrence of recipes array
        // this will keep our recipes array safe ( it can't be accessed from outside)
        return this.recipes.slice();
    }
}
