import { RecipeService } from './../../recipe.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  // Input directive allows us to bind this property from outside
  @Input() recipe: Recipe;
  @Input() id: number;

  // constructor( private _recipeService: RecipeService) { }

  ngOnInit() {
  }

  // onRecipeSelected() {
  //   this._recipeService.recipeSelected.emit(this.recipe);
  // }

}
