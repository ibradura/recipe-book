import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';
import { HomeComponent } from './home.component';
import { RECIPE_ROUTES } from './recipes/recipes.routing';
import { SignupComponent } from './unprotected/signup.component';
import { SigninComponent } from './unprotected/signin.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const APP_ROUTES: Routes =[
    {path:'', component: HomeComponent },
    {path:'signin', component: SigninComponent},
    {path:'signup', component: SignupComponent},
    {path:'recipes', loadChildren: 'app/recipes/recipes.module#RecipesModule', canActivate:[AuthGuard]},
    {path:'shopping-list', component: ShoppingListComponent, canActivate:[AuthGuard]}
];

export const routing = RouterModule.forRoot(APP_ROUTES);