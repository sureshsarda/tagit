import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { Item } from 'src/app/models';
import { ArchiveItem, DeleteItem, FetchItem, UpdateItem, AddItem } from './../../../store/actions';
import { AppStore, getItems } from './../../../store/index';

@Component({
    selector: 'app-item-container',
    templateUrl: './item-container.component.html',
    styleUrls: ['./item-container.component.css']
})
export class ItemContainerComponent implements OnInit {

    activeItems: Item[];
    allItems: Item[];

    showAll = false;

    newItem: Item;

    constructor(
        private store: Store<AppStore>
    ) { }

    ngOnInit() {
        this.resetNewItem();
        this.store.dispatch(new FetchItem({}));
        // this.store.dispatch(new AddItem({ name: 'test' }));

        this.store.select(getItems).pipe(tap(console.log)).subscribe(
            (items: Item[]) => {
                this.allItems = items;
                this.activeItems = items.filter(it => !it.archivedAt);
            }
        );
    }

    get items() {
        return this.showAll ? this.allItems : this.activeItems;
    }

    onItemModified(item: Item) {
        this.store.dispatch(new UpdateItem(item));
    }

    onItemArchive(item: Item) {
        this.store.dispatch(new ArchiveItem(item));
    }

    onItemDelete(item: Item) {
        this.store.dispatch(new DeleteItem(item));
    }

    onItemAdded(item: Item) {
        item.createdAt = new Date();
        this.store.dispatch(new AddItem(item));
        this.resetNewItem();
    }

    resetNewItem() {
        this.newItem = {
            name: '',
            updatedAt: new Date(),
            createdAt: new Date()
        };
    }

}
