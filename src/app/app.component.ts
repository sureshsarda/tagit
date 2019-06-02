import { FetchTag } from './store/actions/tag.action';
import { FetchItem } from './store/actions/item.action';
import { allTags } from './store/selectors/tag.selector';
import { getActiveItems } from './store/selectors/item.selector';
import { AppStore } from './store/index';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    initsRemaining = 2;

    title = 'todo-tagit';

    constructor(private store: Store<AppStore>) { }

    ngOnInit(): void {
        this.store.dispatch(new FetchItem());
        this.store.dispatch(new FetchTag());

        this.store.select(getActiveItems).subscribe(it => {
            console.log('Items Loaded: ', it);
            this.initsRemaining -= 1;
        });

        this.store.select(allTags).subscribe(it => {
            console.log('Tags Loaded:', it);
            // this.initsRemaining -= 1;
        });

        
    }


}
