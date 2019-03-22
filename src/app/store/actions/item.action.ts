import { Item } from './../../models';
import { Action } from '@ngrx/store';

export enum ItemAction {
    AddItem = 'Action Item Add',
    ItemAdded = 'Action Item Added',

    UpdateItem = 'Action Item Update',
    ItemUpdated = 'Action Item Updated',

    DeleteItem = 'Action Item Delete',
    FetchItem = 'Action Item Fetch',
    FetchItemSuccess = 'Action Item Fetch Success',
    ArchiveItem = 'Action Item Archive'
}

export class AddItem implements Action {

    readonly type: string = ItemAction.AddItem;

    constructor(public payload: { name: string }) { }

}

export class ItemAdded implements Action {
    readonly type: string = ItemAction.ItemAdded;

    constructor(public payload: Item) { }
}

export class UpdateItem implements Action {

    readonly type: string = ItemAction.UpdateItem;

    constructor(public payload: Item) { }

}

export class DeleteItem implements Action {

    readonly type: string = ItemAction.AddItem;

    constructor(public payload: { id: string }) { }

}

export class ArchiveItem implements Action {

    readonly type: string = ItemAction.ArchiveItem;

    constructor(public payload: { id: string }) { }

}

export class FetchItem implements Action {

    readonly type: string = ItemAction.FetchItem;

    constructor(public payload: {}) { }
}

export class FetchItemSuccess implements Action {

    readonly type: string = ItemAction.FetchItemSuccess;

    constructor(public payload: Item[]) { }
}

export type ItemActionsType = ItemAdded
    | FetchItemSuccess;