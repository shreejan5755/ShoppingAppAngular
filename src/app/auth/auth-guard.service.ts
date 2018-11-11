import { AuthService } from './auth.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor( private _authService: AuthService) {}

    // this function will return ther result of isAuthenticated method to know weathe the user is logged in or not
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this._authService.isAuthenticated();
    }
}
