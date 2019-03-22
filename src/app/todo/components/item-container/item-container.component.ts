import { Item } from 'src/app/models';
import { FetchItem, AddItem, UpdateItem } from './../../../store/actions/item.action';
import { AppStore, getItems } from './../../../store/index';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';

@Component({
    selector: 'app-item-container',
    templateUrl: './item-container.component.html',
    styleUrls: ['./item-container.component.css']
})
export class ItemContainerComponent implements OnInit {

    items: Item[];

    constructor(
        private store: Store<AppStore>
    ) { }

    ngOnInit() {

        this.store.dispatch(new FetchItem({}));
        // this.store.dispatch(new AddItem({ name: 'test' }));

        this.store.select(getItems).pipe(tap(console.log)).subscribe(
            (items: Item[]) => {
                console.log(items);
                this.items = items;
            }
        );
    }

    onItemModified(item: Item) {
        this.store.dispatch(new UpdateItem(item));
    }

}
