import { COLORS } from './../../../colors.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Tag } from 'src/app/models';
import { AppStore, getTags } from './../../../../store/index';


@Component({
    selector: 'app-tag',
    templateUrl: './tag.component.html',
    styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

    @Input() tags: Tag[];

    @Output() added: EventEmitter<Tag> = new EventEmitter();

    @Output() removed: EventEmitter<Tag> = new EventEmitter();

    newTagName: string;

    colors = COLORS;

    myControl = new FormControl();
    options: Tag[] = [];
    filteredOptions: Observable<Tag[]>;

    constructor(
        private store: Store<AppStore>
    ) { }

    ngOnInit() {
        // this.filteredOptions = this.myControl.valueChanges
        //     .pipe(
        //         map(value => typeof value === 'string' ? value : value.name),
        //         tap(val => this.rawValue = val),
        //         map(value => this._filter(value))
        //     );

        if (!this.tags) {
            this.tags = this.options;
        }

        this.store.select(getTags).subscribe(it => this.options = it);


    }

    private _filter(value: string): Tag[] {
        const filterValue = value.toLowerCase();
        return this.options.filter(option => option.description.toLowerCase().includes(filterValue));
    }

    displayFn(t?: Tag) {
        return t ? t.description : undefined;
    }

    onNewTagAdded(event) {
        console.log(this.newTagName);
        this.newTagName = '';

    }

}
