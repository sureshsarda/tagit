import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap } from 'rxjs/operators';
import { Tag } from 'src/app/model';
import { UpdateTag } from '../actions';
import { FirebaseService } from './../../service/firebase.service';
import { AddTag, TagAdded, TagUpdated } from './../actions/tag.action';


@Injectable()
export class TagEffects {

    @Effect()
    addTag$ = this.actions$.pipe(
        ofType(AddTag.type),
        mergeMap((it: AddTag) => {
            return this.service.addTag(it.payload).then(
                (result: Tag) => {
                    return new TagAdded(result);
                }
            );
        })
    );

    @Effect()
    updateTag$ = this.actions$.pipe(
        ofType(UpdateTag.type),
        mergeMap((it: UpdateTag) => {
            return this.service.updateTag(it.payload).then(
                (result: Tag) => {
                    return new TagUpdated(result);
                }
            );
        })
    );

    constructor(
        private actions$: Actions,
        private service: FirebaseService
    ) { }
}
