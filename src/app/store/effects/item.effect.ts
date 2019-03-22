import { FetchItemSuccess, UpdateItem } from './../actions/item.action';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, tap, mergeMap } from 'rxjs/operators';
import { FirebaseService } from './../../service/firebase.service';
import { ItemAction, AddItem, ItemAdded } from './../actions';


@Injectable()
export class ItemEffects {

    @Effect()
    fetchItems$ = this.actions$.pipe(
        ofType(ItemAction.FetchItem),
        mergeMap(() => {
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
                map(result => ({type: ItemAction.ItemUpdated, payload: result}))
            )
        })
    )


    constructor(
        private actions$: Actions,
        private itemService: FirebaseService
    ) { }
}