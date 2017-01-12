import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { AuthService } from './shared/auth.service';
import { AuthGuard } from './shared/auth.guard';
import { UnprotectedModule } from './unprotected/unprotected.module';
import { HeaderComponent } from './header.component';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { RecipeService } from './recipes/recipe.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { CoreModule } from './core.module';
import { HomeComponent } from './home.component';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    ReactiveFormsModule,
    ShoppingListModule,
    CoreModule,
    UnprotectedModule,
    FormsModule
  ],
  providers: [AuthGuard, AuthService, ShoppingListService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
