import { Item, Tag } from './../../model';
import { FetchItemSuccess, ItemAdded, ItemArchived, ItemDeleted, ItemUpdated, TagAddedToItem, TagRemovedFromItem } from './../actions/item.action';
import { FetchTagSuccess, TagAdded } from './../actions/tag.action';
import { UserState } from './../index';
import { ItemState, TagState } from './../selectors';


export function reducer(state: ItemState, action: { type: string, payload: Item[] | Item }): ItemState {
    switch (action.type) {
        case FetchItemSuccess.type:
            const newState: ItemState = { entities: {} };
            const items = action.payload as Item[];

            items.forEach(it => {
                newState.entities[it.id] = it;
            });
            return newState;

        case ItemAdded.type:
        case ItemUpdated.type:
        case ItemArchived.type:
        case ItemDeleted.type:
        case TagAddedToItem.type:
        case TagRemovedFromItem.type:
            const item = action.payload as Item;
            state.entities[item.id] = item;
            return { ...state };

        default:
            return state;
    }
}

export function tagReducer(state: TagState, action: { type: string, payload: Tag[] | Tag }): TagState {
    switch (action.type) {
        case FetchTagSuccess.type:
            const newState: TagState = { entities: {} };
            const tags = action.payload as Tag[];

            tags.forEach(it => {
                newState.entities[it.id] = it;
            });
            return newState;

        case TagAdded.type:
            const tag = action.payload as Tag;
            state.entities[tag.id] = tag;
            return { ...state };
        // case ItemAdded.type:
        // case ItemUpdated.type:
        // case ItemArchived.type:
        // case ItemDeleted.type:
        //     const item = action.payload as Item;
        //     state.entities[item.id] = item;
        //     return { ...state };

        default:
            return state;
    }
}

export function userReducer(state: UserState, action: { type: string, payload: any }): UserState {
    return null;
}


