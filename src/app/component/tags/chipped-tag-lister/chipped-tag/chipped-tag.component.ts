import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Tag } from 'src/app/model';

@Component({
    selector: 'aye-chipped-tag',
    templateUrl: './chipped-tag.component.html',
    styleUrls: ['./chipped-tag.component.scss']
})
export class ChippedTagComponent implements OnInit {

    @Input() size: 'small' | 'large' = 'small';

    @Input() tag: Tag;

    @Input() showCloseButton: true;

    @Output() closeButton: EventEmitter<any> = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

}
