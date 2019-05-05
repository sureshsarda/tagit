import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/model';

@Component({
    selector: 'aye-item-card',
    templateUrl: './item-card.component.html',
    styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

    @Input() item: Item;

    constructor() { }

    ngOnInit() {
    }

}
