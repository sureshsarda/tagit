import { FetchTag } from './../../../store/actions/tag.action';
import { FetchItem } from './../../../store/actions/item.action';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Item, Tag } from 'src/app/model';
import { AddItem, ArchiveItem, DeleteItem, UpdateItem } from './../../../store/actions';
import { AppStore, getActivatedRoute, getActivatedTag } from './../../../store/index';
import * as selectors from './../../../store/selectors';



@Component({
    selector: 'app-item-container',
    templateUrl: './item-container.component.html',
    styleUrls: ['./item-container.component.css']
})
export class ItemContainerComponent implements OnInit {

    favoriteTags: Tag[];
    activeTag: Tag;
    items: Item[];

    constructor(
        private store: Store<AppStore>,
        private router: Router,
    ) { }

    ngOnInit() {
        this.store.dispatch(new FetchItem());
        this.store.dispatch(new FetchTag());
        this.resetNewItem();

        this.store.select(selectors.favoriteTags).subscribe(it => {
            this.favoriteTags = it;
            if (this.favoriteTags && this.favoriteTags.length) {
                this.activeTag = this.favoriteTags[0];
            }
            console.log('Favorite Tags: ', this.favoriteTags);
            console.log('Active Tag: ', this.activeTag);
        });

        this.store.select(getActivatedTag).subscribe(it => {
            if (it) {
                console.log('Selected Tag Changed: ', it);
                this.activeTag = it;
            }
        });

        this.store.select(selectors.getItems).subscribe(it => {
            this.items = it;
        });
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
        // this.view.filterByTag(t);
    }

    onRemoveTagFilter(t: Tag) {
        // this.view.unfilterTag(t);
    }

    onShowAll() {
        // this.view.reset();
        // this.view.hideCompleted = false;
        // this.view.hideDeleted = false;
    }

    onResetFilters() {
        // this.view.reset();
    }

    resetNewItem() {
        // this.newItem = {
        //     description: '',
        //     updatedAt: new Date(),
        //     createdAt: new Date()
        // };
    }

    onTagClicked(tag: Tag) {
        this.router.navigate(['/', 'tags', tag.id, 'view']);

    }
}