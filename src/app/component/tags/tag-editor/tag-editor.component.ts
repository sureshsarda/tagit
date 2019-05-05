import { COLORS } from './../../../todo/colors.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tag } from 'src/app/model';

@Component({
    selector: 'aye-tag-editor',
    templateUrl: './tag-editor.component.html',
    styleUrls: ['./tag-editor.component.scss']
})
export class TagEditorComponent implements OnInit {

    @Input() tag: Tag;

    @Output() save: EventEmitter<Tag> = new EventEmitter();

    colors = COLORS;

    droppedTags: Tag[] = [];

    constructor() { }

    ngOnInit() {
    }

    onTagDropped(t: Tag) {
        console.log(t);
        this.droppedTags.push(t);
    }


}
