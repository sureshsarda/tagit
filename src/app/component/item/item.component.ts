import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item, Tag } from 'src/app/model';

@Component({
    selector: 'aye-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

    @Input() item: Item;

    @Input() tagOptions: Tag[];

    @Input() hideSecondaryBar: false;

    @Output() update: EventEmitter<Item> = new EventEmitter();

    @Output() done: EventEmitter<Item> = new EventEmitter();

    @Output() delete: EventEmitter<Item> = new EventEmitter();

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

    onTagAdded(tag: Tag) {
        if (tag.id) {
            // tag is already present in database, only added to this task
        } else {
            // tag is not present in database, we have to create it as well
        }

        if (!this.item.tags) {
            this.item.tags = []
        }
        this.item.tags.push(tag);
    }

    onTagRemoved(tag: Tag) {
        this.item.tags = this.item.tags.filter(it => it.id !== tag.id);
    }

    onNewTagAdded(element: HTMLInputElement) {
        const value = element.value;
        element.value = '';
    }

    onDatePickerClosed() {
        if (this.newDueDate !== undefined && this.newDueDate != this.item.duedate) {
            console.log(`Duedate changed. Old was ${this.item.duedate}, new is: ${this.newDueDate}`);
            this.item.duedate = this.newDueDate;

            this.update.emit(this.item);
        }
    }

    onDelete() {
        this.delete.emit(this.item);
    }

}
