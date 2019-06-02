import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'aye-item-create',
    templateUrl: './item-create.component.html',
    styleUrls: ['./item-create.component.scss']
})
export class ItemCreateComponent implements OnInit {

    @Output() newTask: EventEmitter<string> = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    onEnter(input: HTMLInputElement) {
        this.newTask.emit(input.value.trim());
        input.value = '';
    }
}
