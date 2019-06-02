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

    @Output() new: EventEmitter<Tag> = new EventEmitter();

    colors = COLORS;

    droppedTags: Tag[] = [];

    constructor() { }

    ngOnInit() {
    }

    onTagDropped(t: Tag) {
        console.log(t);
        this.droppedTags.push(t);
    }

    onTagNameUpdated(newName: string) {
        if (this.tag.description !== newName.trim()) {
            this.tag.description = newName.trim();
            this.save.emit(this.tag);
        }
    }

    onColorChange(c: string) {
        if (this.tag.color !== c) {
            this.tag.color = c;
            this.save.emit(this.tag);
        }
    }


}
