import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tag } from 'src/app/model';

@Component({
    selector: 'aye-simple-tag',
    templateUrl: './simple-tag.component.html',
    styleUrls: ['./simple-tag.component.scss']
})
export class SimpleTagComponent implements OnInit {

    @Input() tag: Tag;

    @Input() showPrimaryIcon: false;

    @Input() primaryIcon: string;

    @Input() showSecondaryIcon: false;

    @Input() secondaryIcon: string;

    @Input() drag: true;

    @Output() primaryIconClick: EventEmitter<Tag> = new EventEmitter();

    @Output() secondaryIconClick: EventEmitter<Tag> = new EventEmitter();

    @Output() click: EventEmitter<Tag> = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

}
