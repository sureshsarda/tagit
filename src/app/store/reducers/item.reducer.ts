import { ItemState } from '..';
import { ItemAction, UpdateItem } from '../actions';
import { Item } from './../../models';

export function reducer(state: ItemState = { items: [] }, action: { type: string, payload: Item[] }): ItemState {
    switch (action.type) {
        case ItemAction.FetchItemSuccess:
            console.log(action);
            return { items: action.payload };

        case ItemAction.ItemAdded:
            if (action.payload.length > 0) {
                state.items.push(action.payload[0]);
            }
            return { ...state };

        case ItemAction.ItemUpdated:

            if (action.payload.length > 0) {
                const updatedItem = action.payload[0];
                state.items.forEach(it => {
                    if (it.id === updatedItem.id) {
                        it.name = updatedItem.name;
                    }
                });
            }
            return state;

        default:
            console.log(action)
            console.log('Default Action')
            return {
                items: [
                    { name: '', createdAt: new Date() }
                ]
            };
    }
}

