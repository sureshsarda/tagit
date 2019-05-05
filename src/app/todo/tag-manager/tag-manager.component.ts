import { AppStore, getTags } from './../../store/index';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/model';

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
        this.store.select(getTags).subscribe(it => this.tags = it);
    }

}
