import { Item } from './../models';
import { ActionReducerMap, createSelector } from '@ngrx/store';

import * as itemReducers from './reducers';


export interface AppStore {
    items: ItemState;
}

export interface ItemState {
    items: Item[];
}

export const initialState: AppStore = {
    items: { items: [] }
};

export const applicationReducer: ActionReducerMap<AppStore> = {
    items: itemReducers.reducer,
};

export const getItemsState = (state: AppStore) => state.items.items;
export const getItems = createSelector(
    getItemsState,
    (state: Item[]) => {
        return state
    }
)
