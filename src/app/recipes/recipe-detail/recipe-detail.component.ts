import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // @Input() recipe: Recipe;
  recipe: Recipe;
  id: number;

  constructor( private _recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this approach wont work for same page redirection
    // const id = this.route.snapshot.params['id'];

    // this will work for same page redirection
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this._recipeService.getRecipeById(this.id);
      }
    );
  }

  onAddToShoppingList() {
    this._recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
