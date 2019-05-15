import { Item, Tag } from 'src/app/model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getItems, allTags } from 'src/app/store/selectors';
import { AppStore } from './../../../store/index';


@Component({
    selector: 'app-focus',
    templateUrl: './focus.component.html',
    styleUrls: ['./focus.component.scss']
})
export class FocusComponent implements OnInit {

    items: Item[];
    tags: Tag[];

    constructor(private store: Store<AppStore>) { }


    ngOnInit() {
        this.store.select(getItems).subscribe(it => {
            console.log('Focus Component: ', it);
            this.items = it;
        });

        this.store.select(allTags).subscribe(it => {
            console.log('Focus Component:', it);
            this.tags = it;
        });
    }

}
