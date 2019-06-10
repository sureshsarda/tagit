import { FetchItem } from './../../../store/actions/item.action';
import { Item } from './../../../model/models';
import { getAllItems } from './../../../store/selectors/item.selector';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from 'src/app/store';

@Component({
    selector: 'app-org',
    templateUrl: './org.component.html',
    styleUrls: ['./org.component.scss']
})
export class OrgComponent implements OnInit {

    items: Item[];

    displayedColumns: string[] = ['id', 'description', 'duedate', 'tags'];

    constructor(private store: Store<AppStore>) { }

    ngOnInit() {
        this.store.dispatch(new FetchItem());
        this.store.select(getAllItems).subscribe(res => this.items = res);
    }

}
