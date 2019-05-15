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

    @Output() added: EventEmitter<Tag> = new EventEmitter();

    @Output() removed: EventEmitter<Tag> = new EventEmitter();

    newTagName: string;

    colors = COLORS;

    myControl = new FormControl();
    filteredOptions: Observable<Tag[]>;

    constructor() { }

    ngOnInit() { }

    private _filter(value: string): Tag[] {
        const filterValue = value.toLowerCase();
        return this.options.filter(option => option.description.toLowerCase().includes(filterValue));
    }

    displayFn(t?: Tag) {
        return t ? t.description : undefined;
    }

    onNewTagAdded(event) {
        console.log(this.newTagName);
        this.newTagName = '';
    }

    onMenuItemClicked(tag: Tag) {
        this.added.emit(tag);
    }
}
