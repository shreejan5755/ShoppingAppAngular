import { Ingredient } from '../shared/ingredient.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subcription: Subscription;
  constructor( private _shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this._shoppingListService.getIngredients();
    // on ingredients array change this event will fire and then the new list will be shown in the view
    this.subcription = this._shoppingListService.ingredientsChanged.subscribe(
      (newIngredients: Ingredient[]) => {
        this.ingredients = newIngredients;
      }
    );
  }

  onEditItem(index: number) {
    this._shoppingListService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subcription.unsubscribe();
  }

}
