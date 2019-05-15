import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tag } from 'src/app/model';

@Component({
    selector: 'aye-vertical-tag-lister',
    templateUrl: './vertical-tag-lister.component.html',
    styleUrls: ['./vertical-tag-lister.component.scss']
})
export class VerticalTagListerComponent implements OnInit {

    /**
     * These are the tags that will be listed by this component
     */
    @Input() tags: Tag[];

    /**
     * This will attach a draggable directives to the tags
     */
    @Input() draggable: true;

    /**
     * A close icon is shown at the end of the tag
     */
    @Input() secondaryIcon: false;

    /**
     * What kind of icon to display: delete, close, etc. This should be a valid material icon
     */
    @Input() secondaryIconType: 'close';

    /**
     * Primary icons are displayed before the tag on the left side
     */
    @Input() primaryIcon: false;

    /**
     * Primary icons type should be a valid material icon
     */
    @Input() primaryIconType: 'lens'

    /**
     * Triggered when a tag is clicked
     */
    @Output() tagClick: EventEmitter<Tag> = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

}
