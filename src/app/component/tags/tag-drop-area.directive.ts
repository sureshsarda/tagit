import { Directive, EventEmitter, Output, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';
import { Tag } from 'src/app/model';

@Directive({
    selector: '[ayeTagDropArea]'
})
export class TagDropAreaDirective {

    private _isDropActive = false;

    @Output() tagDropped: EventEmitter<Tag> = new EventEmitter();

    @HostBinding('class') get dropTargetClassed() {
        if (this._isDropActive) {
            if (this.el.nativeElement.classList.value.indexOf('drop-area') < 0) {
                return this.el.nativeElement.classList.value + ' drop-area';
            }
            return this.el.nativeElement.classList.value;
        } else {
            return this.el.nativeElement.classList.value.replace('drop-area', '');
        }
    }

    @HostListener('dragover', ['$event']) ondragover(event: DragEvent) {
        const types = event.dataTransfer.types;
        if (types.indexOf('tag') > -1) {
            this._isDropActive = true;
            event.preventDefault();
        }
    }

    @HostListener('dragenter', ['$event']) ondragenter(event: DragEvent) {
        const types = event.dataTransfer.types;
        if (types.indexOf('tag') > -1) {
            event.preventDefault();
            console.log('Drag Entered');
            // this.renderer.addClass(this.el, 'drop-area');
        }
    }

    @HostListener('dragleave', ['$event']) ondragleave(event: DragEvent) {
        this._isDropActive = false;
    }

    @HostListener('drop', ['$event']) ondrop(event: DragEvent) {
        const t: Tag = JSON.parse(event.dataTransfer.getData('tag'));
        console.log(t);
        this._isDropActive = false;
        this.tagDropped.emit(t);
        event.preventDefault();
    }

    private isValidDrop() {

    }

    constructor(
        private el: ElementRef<HTMLElement>) { }

}
