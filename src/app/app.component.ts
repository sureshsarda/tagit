import { FetchTag } from './store/actions/tag.action';
import { FetchItem } from './store/actions/item.action';
import { Store } from '@ngrx/store';
import { AppStore } from './store/index';
import { Component, OnInit } from '@angular/core';

@Component({
    template: `<router-outlet></router-outlet>`,
    selector: 'app-root',
})
export class AppComponent implements OnInit {

    title = 'todo-tagit';

    constructor(private store: Store<AppStore>) { }

    ngOnInit(): void {
        this.store.dispatch(new FetchItem());
        this.store.dispatch(new FetchTag());
    }


}
