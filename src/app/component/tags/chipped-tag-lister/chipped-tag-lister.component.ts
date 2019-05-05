import { Component, OnInit, Input } from '@angular/core';
import { Tag } from 'src/app/model';

@Component({
    selector: 'aye-chipped-tag-lister',
    templateUrl: './chipped-tag-lister.component.html',
    styleUrls: ['./chipped-tag-lister.component.css']
})
export class ChippedTagListerComponent implements OnInit {

    @Input() tags: Tag[] = [];

    constructor() { }

    ngOnInit() {
        console.log(this.tags);
    }

}
