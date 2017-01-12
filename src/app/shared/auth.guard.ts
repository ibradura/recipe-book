import { Observable } from 'rxjs/Rx';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
@Injectable()
export class AuthGuard implements CanActivate {
    isAuthenticated = false;
    constructor(private authService: AuthService, private router: Router) {
        this.authService.isAuthenticated().subscribe(
            authStatus => this.isAuthenticated = authStatus
        );
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        this.authService.isAuthenticated().first().subscribe((result) => {if (!result) {this.router.navigate(['signin']);}});
        return this.authService.isAuthenticated().first();
    }
}