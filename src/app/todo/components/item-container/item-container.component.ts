import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Item, Tag } from 'src/app/model';
import { AddItem, ArchiveItem, DeleteItem, FetchItem, UpdateItem } from './../../../store/actions';
import { FetchTag } from './../../../store/actions/tag.action';
import { AppStore, getItems, getTags } from './../../../store/index';


class FilteredView {

    private allItems: Item[];

    tagFilters = new Set();

    private _hideCompleted = true;

    private _hideDeleted = true;

    constructor(items: Item[]) {
        this.allItems = items;


    }

    toggleCompleted() {
        this._hideCompleted = !this._hideCompleted;
    }

    toggleDeleted() {
        this._hideDeleted = !this._hideDeleted;
    }

    reset() {
        this._hideCompleted = true;
        this._hideDeleted = true;
        this.tagFilters = new Set();
    }

    filterByTag(t: Tag) {
        this.tagFilters.add(t.id);
    }

    unfilterTag(t: Tag) {
        this.tagFilters.delete(t.id);
    }

    set hideDeleted(val: boolean) {
        this._hideDeleted = val;
    }

    set hideCompleted(val: boolean) {
        this._hideCompleted = val;
    }

    get filtered() {
        let newItemSet = this.allItems
            .filter((it: Item) => this._hideCompleted && !it.completed_at)
            .filter((it: Item) => this._hideDeleted && !it.deleted_at)
            .filter((it: Item) => {
                if (this.tagFilters.size === 0) {
                    return true;
                }

                const itemTags = it.tags.map((ct: Tag) => ct.id);
                const intersection = itemTags.filter(ct => this.tagFilters.has(ct));
                const val = intersection.length > 0 ? true : false;
                return val;
            });
        return newItemSet;
    }

    items(items: Item[]) {
        this.allItems = items;
    }


}
@Component({
    selector: 'app-item-container',
    templateUrl: './item-container.component.html',
    styleUrls: ['./item-container.component.css']
})
export class ItemContainerComponent implements OnInit {

    view: FilteredView = new FilteredView([]);

    tags$: Observable<Tag[]>;
    filterTags = new Set();
    _tagOptions: Tag[];

    newItem: Item;

    constructor(
        private store: Store<AppStore>
    ) { }

    ngOnInit() {
        this.resetNewItem();
        // this.store.dispatch(new AddItem({ name: 'test' }));

        this.store.select(getItems).subscribe(
            (items: Item[]) => {
                this.view.items(items.map(it => {
                    it.duedate = it.duedate ? new Date(it.duedate) : it.duedate;
                    return it;
                }));
            }
        );

        this.store.select(getTags).subscribe(it => this._tagOptions = it);

        this.tags$ = this.store.select(getTags);
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

    onAddTagFilter(t: Tag) {
        this.view.filterByTag(t);
        // this.filterTags.add(t.id);
        // this.activeItems = Filters.apply(this.allItems, this.filterTags);
    }

    onRemoveTagFilter(t: Tag) {
        this.view.unfilterTag(t);
        // this.filterTags.delete(tid);
        // this.activeItems = Filters.apply(this.allItems, this.filterTags);
    }

    onShowAll() {
        this.view.reset();
        this.view.hideCompleted = false;
        this.view.hideDeleted = false;
    }

    onResetFilters() {
        this.view.reset();
    }

    resetNewItem() {
        this.newItem = {
            description: '',
            updatedAt: new Date(),
            createdAt: new Date()
        };
    }

}