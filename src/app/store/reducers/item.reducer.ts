import { ItemState } from '..';
import { ItemAction } from '../actions';
import { Item } from './../../models';

export function reducer(state: ItemState, action: { type: string, payload: Item[] | Item }): ItemState {
    switch (action.type) {
        case ItemAction.FetchItemSuccess:
            const newState: ItemState = { entities: {} };
            const items = action.payload as Item[];

            items.forEach(it => {
                newState.entities[it.id] = it;
            });
            return newState;

        case ItemAction.ItemAdded:
        case ItemAction.ItemUpdated:
        case ItemAction.ItemArchived:
        case ItemAction.ItemDeleted:
            const item = action.payload as Item;
            state.entities[item.id] = item;
            return { ...state };

        default:
            return state;
    }
}

