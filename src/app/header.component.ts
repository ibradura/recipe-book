import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { AuthService } from './shared/auth.service';
import { RecipeService } from './recipes/recipe.service';

@Component({
  selector: 'rb-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnDestroy {
  isAuthenticated =false;
  private subscription: Subscription;
  constructor(private recipesService: RecipeService, private authService: AuthService) {
    this.authService.isAuthenticated().subscribe(
      authStatus => this.isAuthenticated = authStatus
    );
  }
  onStore() {
    this.recipesService.storeData().subscribe(
    data => console.log(data),
    error => console.log(error)
    );
  }
  onFetch() {
    this.recipesService.fetchData();
  }
  isAuth(){
    return this.isAuthenticated;
  }
  onLogout(){
    this.authService.logout();
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}