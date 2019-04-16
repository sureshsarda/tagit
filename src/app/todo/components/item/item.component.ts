import { element } from 'protractor';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item, Tag } from 'src/app/models';
import { } from 'events';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

    @Input() item: Item;

    @Output() update: EventEmitter<Item> = new EventEmitter();

    @Output() done: EventEmitter<Item> = new EventEmitter();

    @Output() delete: EventEmitter<Item> = new EventEmitter();

    tags = ['today', 'every-monday'];

    constructor() { }

    ngOnInit() {
    }
    onEnter(value: string) {
        this.item.name = value.trim();
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
        this.tags.push(value.trim());
        element.value = '';
    }

}
