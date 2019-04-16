import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tag } from 'src/app/models';
import { Observable } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-tag',
    templateUrl: './tag.component.html',
    styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

    @Input() tags: Tag[];

    @Output() added: EventEmitter<Tag> = new EventEmitter();

    @Output() removed: EventEmitter<Tag> = new EventEmitter();

    rawValue: string = undefined;

    myControl = new FormControl();
    options: Tag[] = [{ id: '1', name: 'One' }, { id: '2', name: 'Two' }, { id: '3', name: 'Three' }];
    filteredOptions: Observable<Tag[]>;

    constructor() { }

    ngOnInit() {
        this.filteredOptions = this.myControl.valueChanges
            .pipe(
                map(value => typeof value === 'string' ? value : value.name),
                tap(val => this.rawValue = val),
                map(value => this._filter(value))
            );


    }

    private _filter(value: string): Tag[] {
        const filterValue = value.toLowerCase();
        return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
    }

    displayFn(t?: Tag) {
        return t ? t.name : undefined;
    }

    onNewTagAdded(event) {
        console.log(this.rawValue);
    }

}
