import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tag } from 'src/app/model';

@Component({
    selector: 'aye-navigator',
    templateUrl: './navigator.component.html',
    styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {

    _allTags: Tag[];
    _favoriteTags: Tag[];

    @Output() tagClicked: EventEmitter<Tag> = new EventEmitter();


    @Input() set tags(tags: Tag[]) {
        this._allTags = tags;
        this._favoriteTags = tags.filter(it => it.favorite);
    }

    constructor() { }

    ngOnInit() {
    }

}
