import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FetchItem } from './store/actions/item.action';
import { FetchTag } from './store/actions/tag.action';
import { AppStore } from './store/index';

@Component({
    template: `<router-outlet></router-outlet>`,
    selector: 'app-root',
})
export class AppComponent implements OnInit {

    title = 'todo-tagit';

    constructor(
        private store: Store<AppStore>
        // private routerService: RouterWrapperService
    ) { }

    ngOnInit(): void {
        this.store.dispatch(new FetchItem());
        this.store.dispatch(new FetchTag());
    }


}
