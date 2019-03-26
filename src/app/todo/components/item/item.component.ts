import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/models';
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

}
