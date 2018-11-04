import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
    // adding a new eventEmitter to inform the components that ingredients have changed
    // ingredientsChanged = new EventEmitter<Ingredient[]>();
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    AddIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        // for ( let ing of ingredientsItem) {
        //     this.AddIngredient(ing);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    // method to get a particular ingredient for edit
    getIngredient(index: number) {
        return this.ingredients[index];
    }

    // method to update the ingredient
    updateIngredient( index: number, newIngredient: Ingredient) {
       this.ingredients[index] = newIngredient;
       this.ingredientsChanged.next(this.ingredients.slice());
    }

    // method to delete the ingredient
    deleteIngredient(index: number) {
        // removing the element in the particluar index by slicing one item 
        // from that index
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}
