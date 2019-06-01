import { COLORS } from './../../../todo/colors.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Tag } from 'src/app/model';



@Component({
    selector: 'aye-tag',
    templateUrl: './tag.component.html',
    styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

    @Input() tags: Tag[];

    @Input() options: Tag[];

    @Input() expanded = true;

    @Output() added: EventEmitter<Tag> = new EventEmitter();

    @Output() removed: EventEmitter<Tag> = new EventEmitter();

    _deleted = new Set();

    constructor() { }

    ngOnInit() { }


    onMenuItemClicked(tag: Tag) {
        this.added.emit(tag);
    }

    onTagRemoved(tag: Tag) {
        this._deleted.add(tag.id);
        this.removed.emit(tag);
    }
}
