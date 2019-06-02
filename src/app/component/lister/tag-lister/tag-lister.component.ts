import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tag } from 'src/app/model';

@Component({
    selector: 'aye-tag-lister',
    templateUrl: './tag-lister.component.html',
    styleUrls: ['./tag-lister.component.scss']
})
export class TagListerComponent implements OnInit {

    @Input() tags: Tag[];

    @Input() draggable = false;

    @Output() tagClicked: EventEmitter<Tag> = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }
}
