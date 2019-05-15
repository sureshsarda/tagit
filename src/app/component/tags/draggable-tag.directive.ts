import { Directive, HostListener, ElementRef, Input } from '@angular/core';
import { Tag, Item } from 'src/app/model';

export abstract class DraggableDirective<K> {

    @Input() payload: K;

    @Input() dragActive = true;

    @HostListener('dragstart', ['$event']) ondragstart(event) {

        if (this.payload !== undefined) {
            event.dataTransfer.setData(this.getKind(), JSON.stringify(this.payload));
        }
    }

    constructor(el: ElementRef<HTMLElement>) {
        el.nativeElement.draggable = this.dragActive;
        el.nativeElement.style.cursor = 'move';
    }

    protected abstract getKind(): string;
}

@Directive({
    selector: '[ayeDraggableTag]'
})
export class DraggableTagDirective extends DraggableDirective<Tag> {
    protected getKind(): string {
        return 'tag';
    }

    constructor(private el: ElementRef<HTMLElement>) {
        super(el);
    }
}


// @Directive({
//     selector: '[ayeDraggableItem]'
// })
// export class DraggableItemDirective extends DraggableDirective<Item> {
//     protected getKind(): string {
//         return 'item';
//     }

// }

