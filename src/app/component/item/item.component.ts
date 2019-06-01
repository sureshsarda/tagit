import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item, Tag } from 'src/app/model';

@Component({
    selector: 'aye-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

    @Input() item: Item;

    @Input() tagOptions: Tag[];

    // hideSecondaryBar = true;

    @Input() hideSecondaryBar = true;

    @Input() expand = true;

    @Output() update: EventEmitter<Item> = new EventEmitter();

    @Output() done: EventEmitter<Item> = new EventEmitter();

    @Output() delete: EventEmitter<Item> = new EventEmitter();

    @Output() tagAdded: EventEmitter<Tag> = new EventEmitter();

    @Output() tagRemoved: EventEmitter<Tag> = new EventEmitter();

    newDueDate: Date = undefined;

    constructor(
    ) { }

    ngOnInit() {

    }

    onEnter(value: string) {
        this.item.description = value.trim();
        this.update.emit(this.item);
    }

    onCheckClick() {
        this.done.emit(this.item);
    }

    onTagRemoved(tag: Tag) {
        this.item.tags = this.item.tags.filter(it => it.id !== tag.id);
        this.tagRemoved.emit(tag);
    }


    onTagAdded(t: Tag) {
        if (this.item.tags.map(tag => tag.id).indexOf(t.id) <= -1) {
            this.item.tags.push(t);
            this.tagAdded.emit(t);
        }
    }

    onDatePickerClosed() {
        if (this.newDueDate !== undefined && this.newDueDate !== this.item.duedate) {
            console.log(`Duedate changed. Old was ${this.item.duedate}, new is: ${this.newDueDate}`);
            this.item.duedate = this.newDueDate;

            this.update.emit(this.item);
        }
    }

    onDelete() {
        this.delete.emit(this.item);
    }

}
