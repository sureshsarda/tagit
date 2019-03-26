import { Item } from './../../models';
import { Action } from '@ngrx/store';

export enum ItemAction {
    AddItem = 'Action Item Add',
    ItemAdded = 'Action Item Added',

    UpdateItem = 'Action Item Update',
    ItemUpdated = 'Action Item Updated',

    DeleteItem = 'Action Item Delete',
    ItemDeleted = 'Action Item Deleted',

    FetchItem = 'Action Item Fetch',
    FetchItemSuccess = 'Action Item Fetch Success',

    ArchiveItem = 'Action Item Archive',
    ItemArchived = 'Action Item Archived'
}

export class AddItem implements Action {

    readonly type: string = ItemAction.AddItem;

    constructor(public payload: Item) { }

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

    readonly type: string = ItemAction.DeleteItem;

    constructor(public payload: Item) { }

}

export class ItemDeleted implements Action {

    readonly type: string = ItemAction.ItemDeleted;

    constructor(public payload: Item) { }

}

export class ArchiveItem implements Action {

    readonly type: string = ItemAction.ArchiveItem;

    constructor(public payload: Item) { }

}

export class ItemArchived implements Action {
    readonly type: string = ItemAction.ItemArchived;

    constructor(public payload: Item) { }
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