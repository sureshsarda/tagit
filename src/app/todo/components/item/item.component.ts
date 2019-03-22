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

    @Output() itemUpdated: EventEmitter<Item> = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    onTextAreaBlur(element) {
        console.log(element.target);
        // element.target.selectionEnd = 0
        element.target.setSelectionRange(0, 0);
    }

    onTextAreaFocus(element) {
        element.target.selectionEnd = 0;
    }

    onEnter(value: string, event) {
        this.item.name = value.split('\n').join(' ');
        event.target.value = this.item.name;
        this.itemUpdated.emit(this.item);
    }

}
