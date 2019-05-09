import { Component, Input, OnInit } from '@angular/core';
import { Tag } from 'src/app/model';
import { Item } from './../../model/models';

@Component({
    selector: 'app-super-tag',
    templateUrl: './super-tag.component.html',
    styleUrls: ['./super-tag.component.css']
})
export class SuperTagComponent implements OnInit {

    _super: Tag;
    _items: Item[];

    @Input() set super(tag: Tag) {
        this._super = tag;
        this.refreshBuckets();
    }

    @Input() set items(items: Item[]) {
        this._items = items;
        this.refreshBuckets();
    }

    _buckets: { [id: string]: Item[] };

    constructor(
    ) { }

    ngOnInit() {

    }

    private refreshBuckets() {
        if (this._super && this._items) {
            this._buckets = this._super.super.bucket(this._items);
            console.log('Bucketed Super Tag: ', this._buckets);
        }
    }

}
