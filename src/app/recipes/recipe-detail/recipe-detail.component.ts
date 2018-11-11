import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  
})
export class RecipeDetailComponent implements OnInit {
  // @Input() recipe: Recipe;
  recipe: Recipe;
  id: number;

  constructor( private _recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

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

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this is just an example of complex navigation which could also be used
    // here we go up one route (i.e. to recipe) then we add id and edit to the route
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  // method to delete ther recipe
  onDeleteRecipe() {
    this._recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

}
