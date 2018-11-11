import { AuthService } from './../auth/auth.service';
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { map } from "rxjs/operators";

@Injectable()
export class DataStorageService {
    constructor( private http: Http,
        private _recipeService: RecipeService,
        private _authService: AuthService
        ) {}

    storeRecipe() {
        const token = this._authService.getToken();
        return this.http.put('https://tryproject-a7c0e.firebaseio.com/try.json?auth=' + token, this._recipeService.getRecipes());
    }

    getRecipe() {
        const token = this._authService.getToken();
        this._authService.getToken();
        this.http.get('https://tryproject-a7c0e.firebaseio.com/try.json?auth=' + token).subscribe(
            (response: Response) => {
                // json() converts the data into the javascript object
                const recipes = response.json();
                this._recipeService.setRecipes(recipes);
            }
        );
    }
}
