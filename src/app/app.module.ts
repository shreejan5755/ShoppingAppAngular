import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth-guard.service';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { HeaderComponent } from './header/header.component';
import { RecipeService } from './recipes/recipe.service';
import { RecipesModule } from './recipes/recipes.module';
import { DataStorageService } from './shared/data-storage.service';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { ShoppingListService } from './shopping-list/shopping-list.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RecipesModule,
    HttpModule,
    SharedModule,
    ShoppingListModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService, RecipeService, DataStorageService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
