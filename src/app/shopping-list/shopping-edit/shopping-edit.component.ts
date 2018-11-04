import { ShoppingListService } from './../shopping-list.service';
import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // @ViewChild('nameInput') nameInputRef: ElementRef;
  // @ViewChild('amountInput') amountInputRef: ElementRef;

  // @Output() ingredientAdded = new EventEmitter<Ingredient>();

  // variable of subscription type to unsubscribe the subject after subscription
  subscribtion: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  // using the viewChild to access the form
  @ViewChild('f') formAccess: NgForm;

  constructor( private _shoppingListService: ShoppingListService) { }

  ngOnInit() {
     this.subscribtion = this._shoppingListService.startedEditing
     .subscribe(
       (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        // getting the edited item from the service getIngredient method
        this.editedItem = this._shoppingListService.getIngredient(index);

        // changing the form on basis of edited data
        this.formAccess.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
       }
     );
  }

  onSubmit(form: NgForm) {
    // const ingName = this.nameInputRef.nativeElement.value;
    // const ingAmount = this.amountInputRef.nativeElement.value;
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this._shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
    this._shoppingListService.AddIngredient(newIngredient);
    }
    // this.ingredientAdded.emit(newIngredient);
    this.editMode = false;
    form.reset();
  }

  // onClear method for the clear button
  onClear() {
    this.formAccess.reset();
    // we have to clear the edit mode incase it is in edit mode
    this.editMode = false;
  }

  onDelete() {
    this._shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this._shoppingListService.startedEditing.unsubscribe();
  }

}
