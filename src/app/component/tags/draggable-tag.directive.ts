import { Directive, HostListener, ElementRef, Input } from '@angular/core';
import { Tag } from 'src/app/model';

@Directive({
    selector: '[ayeDraggableTag]'
})
export class DraggableTagDirective {

    @Input() dragTagId: Tag;

    @HostListener('dragstart', ['$event']) ondragstart(event) {
        if (this.dragTagId !== undefined) {
            event.dataTransfer.setData('tag', JSON.stringify(this.dragTagId));
        }
    }

    constructor(el: ElementRef<HTMLElement>) {
        el.nativeElement.draggable = true;
        el.nativeElement.style.cursor = 'move';
    }

}
