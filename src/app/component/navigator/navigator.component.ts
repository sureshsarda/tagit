import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tag } from 'src/app/model';

@Component({
    selector: 'aye-navigator',
    templateUrl: './navigator.component.html',
    styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {

    @Output() tagClicked: EventEmitter<Tag> = new EventEmitter();

    @Input() tags: Tag[];


    constructor() { }

    ngOnInit() {
    }

}
