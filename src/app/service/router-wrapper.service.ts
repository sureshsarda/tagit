import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, ActivationEnd } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppStore } from '../store';
import { AppNavigationAction } from '../store/actions/router.action';
import { filter, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class RouterWrapperService {

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private store: Store<AppStore>
    ) {
        this.router.events.pipe(
            filter(event => event instanceof ActivationEnd),
        ).subscribe((event: ActivationEnd) => {
            this.store.dispatch(new AppNavigationAction(event.snapshot));
        }
        );

        this.activatedRoute.paramMap.subscribe(it => {
            console.log('Params map changed');
            this.store.dispatch(new AppNavigationAction(this.activatedRoute.snapshot));
        });

        this.activatedRoute.url.subscribe(it => {
            console.log('URL changed');
            this.store.dispatch(new AppNavigationAction(this.activatedRoute.snapshot))
        });
    }



}
