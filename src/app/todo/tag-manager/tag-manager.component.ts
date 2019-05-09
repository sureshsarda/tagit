import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Tag } from 'src/app/model';
import { AppStore } from './../../store/index';
import * as selectors from '../../store/selectors';

@Component({
    selector: 'app-tag-manager',
    templateUrl: './tag-manager.component.html',
    styleUrls: ['./tag-manager.component.css']
})
export class TagManagerComponent implements OnInit {

    tags: Tag[];

    constructor(
        private store: Store<AppStore>
    ) { }

    ngOnInit() {
        this.store.select(selectors.allTags).subscribe(it => this.tags = it);
    }

}
