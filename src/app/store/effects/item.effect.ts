import { Item } from './../../model';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { FirebaseService } from './../../service/firebase.service';
import {
    AddItem,
    ArchiveItem,
    DeleteItem,
    FetchItem,
    FetchItemSuccess,
    ItemAdded,
    ItemArchived,
    ItemDeleted,
    ItemUpdated,
    UpdateItem,
    FetchTag,
    FetchTagSuccess
} from './../actions';


@Injectable()
export class ItemEffects {

    @Effect()
    addItem$ = this.actions$.pipe(
        ofType(AddItem.type),
        mergeMap((it: AddItem) => {
            return this.itemService.addItem(it.payload).then(
                (result: Item) => {
                    return new ItemAdded(result);
                }
            );
        })
    );

    @Effect()
    updateItem$ = this.actions$.pipe(
        ofType(UpdateItem.type),
        mergeMap((it: UpdateItem) => {
            return this.itemService.updateItem(it.payload).then(
                (result: Item) => {
                    return new ItemUpdated(result);
                }
            );
        })
    );

    @Effect()
    deleteItem$ = this.actions$.pipe(
        ofType(DeleteItem.type),
        mergeMap((it: DeleteItem) => {
            return this.itemService.deleteItem(it.payload).then(
                (result: Item) => {
                    return new ItemDeleted(result);
                }
            );
        })
    );

    @Effect()
    archiveItem$ = this.actions$.pipe(
        ofType(ArchiveItem.type),
        mergeMap((it: ArchiveItem) => {
            return this.itemService.archiveItem(it.payload).then(
                (result: Item) => {
                    return new ItemArchived(result);
                }
            );
        })
    );


    @Effect()
    fetchItems$ = this.actions$.pipe(
        ofType(FetchItem.type),
        mergeMap((it: FetchItem) => {
            return this.itemService.getItems(it.payload).then(result => {
                return new FetchItemSuccess(result);
            });
        })
    );

    @Effect()
    fetchTags$ = this.actions$.pipe(
        ofType(FetchTag.type),
        mergeMap((it: FetchTag) => {
            return this.itemService.getTags(it.payload).then(result => {
                return new FetchTagSuccess(result);
            });
        })
    );



    constructor(
        private actions$: Actions,
        private itemService: FirebaseService
    ) { }
}
