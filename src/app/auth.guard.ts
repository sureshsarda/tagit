import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

    constructor(private router: Router,
        private activeRoute: ActivatedRoute) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.guard();
    }

    canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
        return this.guard();
    }

    private guard() {
        if (this.checkIfAllItemsArePresent()) {
            return true;
        } else {
            console.log('Not logged in. Redirecting to login page...');
            this.router.navigate(['/login']);
            return false;
        }
    }

    private checkIfAllItemsArePresent() {
        const toCheck = ['user_id', 'email', 'name', 'token'];
        let status = true;
        toCheck.forEach(it => {
            if (!localStorage.getItem(it)) {
                status = false;
            }
        });
        return status;
    }
}
