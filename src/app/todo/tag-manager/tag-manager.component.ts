import { UpdateTag, AddTag } from './../../store/actions/tag.action';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Tag } from 'src/app/model';
import { AppStore } from './../../store/index';
import * as selectors from '../../store/selectors';

@Component({
    selector: 'app-tag-manager',
    templateUrl: './tag-manager.component.html',
    styleUrls: ['./tag-manager.component.css']
})
export class TagManagerComponent implements OnInit {

    tags: Tag[];

    selectedTag: Tag;

    constructor(
        private store: Store<AppStore>
    ) { }

    ngOnInit() {
        this.store.select(selectors.allTags).subscribe(it => {
            console.log(it);
            this.tags = it;
            this.selectedTag = this.tags[0];
        });
    }

    onTagUpdated(tag: Tag) {
        if (tag.id) {
            this.store.dispatch(new UpdateTag(tag));
        } else {
            this.store.dispatch(new AddTag(tag));
        }
    }

    onNewTag() {
        this.selectedTag = { description: 'Untitled Tag', color: '#000000' };
    }

}
