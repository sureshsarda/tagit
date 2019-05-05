import { Component, OnInit, Input } from '@angular/core';
import { Tag } from 'src/app/model';

@Component({
    selector: 'aye-chipped-tag',
    templateUrl: './chipped-tag.component.html',
    styleUrls: ['./chipped-tag.component.scss']
})
export class ChippedTagComponent implements OnInit {

    @Input() tag: Tag;

    @Input() showCloseButton: true;

    constructor() { }

    ngOnInit() {
    }

}
