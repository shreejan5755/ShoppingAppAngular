import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selctedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  selectedRecipeMethod(recipe: Recipe) {
    this.selctedRecipe = recipe;
  }

}
