import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Item, Tag } from 'src/app/model';
import { allTags } from 'src/app/store/selectors';
import { AppStore } from './../../../store/index';
import { getActiveItems } from './../../../store/selectors/item.selector';


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
        this.store.select(getActiveItems).subscribe(it => {
            console.log('Focus Component: ', it);
            this.items = it;
        });

        this.store.select(allTags).subscribe(it => {
            console.log('Focus Component:', it);
            this.tags = it;
        });
    }

}
