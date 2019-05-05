import { Item } from 'src/app/model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'aye-horizontal-lister',
    templateUrl: './horizontal.component.html',
    styleUrls: ['./horizontal.component.scss']
})
export class HorizontalComponent implements OnInit {

    @Input()
    set items(items: Item[]) {
        const grouped = {};
        const tags = [];
        items.forEach(it => {
            if (it.tags) {
                it.tags.forEach(t => {
                    if (grouped[t.id] === undefined) {
                        grouped[t.id] = [];
                        tags.push(t);
                    }
                    grouped[t.id].push(it);
                });
            }
        });

        this._groupedByTag = grouped;
        this._tags = tags;
    }

    _groupedByTag = {};
    _tags = [];

    constructor() { }

    ngOnInit() {
    }


}
