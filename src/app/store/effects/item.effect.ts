import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { FirebaseService } from './../../service/firebase.service';
import { AddItem, ItemAction } from './../actions';
import { ArchiveItem, DeleteItem, FetchItemSuccess, UpdateItem, FetchItem } from './../actions';


@Injectable()
export class ItemEffects {

    @Effect()
    fetchItems$ = this.actions$.pipe(
        ofType(ItemAction.FetchItem),
        mergeMap((it: FetchItem) => {
            return this.itemService.getItems().pipe(
                map(result => {
                    console.log(result);
                    return new FetchItemSuccess(result)
                })
            );
        })
    );

    @Effect()
    addItem$ = this.actions$.pipe(
        ofType(ItemAction.AddItem),
        mergeMap((it: AddItem) => {
            return this.itemService.addItem(it.payload).pipe(
                map(result => ({ type: ItemAction.ItemAdded, payload: result }))
            );
        })
    );

    @Effect()
    updateItem$ = this.actions$.pipe(
        ofType(ItemAction.UpdateItem),
        mergeMap((it: UpdateItem) => {
            return this.itemService.updateItem(it.payload).pipe(
                map(result => ({ type: ItemAction.ItemUpdated, payload: result }))
            )
        })
    )

    @Effect()
    deleteItem$ = this.actions$.pipe(
        ofType(ItemAction.DeleteItem),
        mergeMap((it: DeleteItem) => {
            return this.itemService.deleteItem(it.payload).pipe(
                map(result => ({ type: ItemAction.ItemDeleted, payload: result }))
            )
        })
    )

    @Effect()
    archiveItem$ = this.actions$.pipe(
        ofType(ItemAction.ArchiveItem),
        mergeMap((it: ArchiveItem) => {
            return this.itemService.archiveItem(it.payload).pipe(
                map(result => ({ type: ItemAction.ItemArchived, payload: result }))
            )
        })
    )

    crudAction(filterOn: Action, call, mapTo) {
        this.actions$.pipe(
            ofType(filterOn.type),
            mergeMap((filterOn) => {
                return call(filterOn['payload']).pipe(
                    map(result => ({ type: mapTo, payload: result }))
                )
            })
        )
    };


    constructor(
        private actions$: Actions,
        private itemService: FirebaseService
    ) { }
}