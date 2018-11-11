import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  // selctedRecipe: Recipe;

  constructor( private _recipeService: RecipeService ) { }

  ngOnInit() {
    // used for cross component communication
    // this._recipeService.recipeSelected.subscribe(
    //   (recipe: Recipe) => {
    //     this.selctedRecipe = recipe;
    //   }
    // );
  }

}
