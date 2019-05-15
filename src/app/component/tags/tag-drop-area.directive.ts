import { Directive, EventEmitter, Output, HostListener, ElementRef, HostBinding, Input } from '@angular/core';
import { Tag } from 'src/app/model';

export abstract class DropArea<K> {

    private _isDropActive = false;

    @Input() dropActiveClass;

    @Output() dropped: EventEmitter<K> = new EventEmitter();

    @HostBinding('class') get dropTargetClassed() {
        const cls = this.dropActiveClass || 'drop-area';
        if (this._isDropActive) {
            if (this.el.nativeElement.classList.value.indexOf(cls) < 0) {
                return this.el.nativeElement.classList.value + ' ' + cls;
            }
            return this.el.nativeElement.classList.value;
        } else {
            return this.el.nativeElement.classList.value.replace(cls, '');
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
        if (types.indexOf(this.getAccepts()) > -1) {
            event.preventDefault();
        }
    }

    @HostListener('dragleave', ['$event']) ondragleave(event: DragEvent) {
        this._isDropActive = false;
    }

    @HostListener('drop', ['$event']) ondrop(event: DragEvent) {
        const t: K = JSON.parse(event.dataTransfer.getData(this.getAccepts()));
        // console.log(t);
        this._isDropActive = false;
        this.dropped.emit(t);
        event.preventDefault();
    }

    protected abstract getAccepts(): string;


    constructor(private el: ElementRef<HTMLElement>) { }
}


@Directive({
    selector: '[ayeTagDropArea]'
})
export class TagDropAreaDirective extends DropArea<Tag> {

    protected getAccepts(): string {
        return 'tag';
    }

    constructor(el: ElementRef<HTMLElement>) {
        super(el);
    }

}
