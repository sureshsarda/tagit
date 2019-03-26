import { Item } from './../models';
import { ActionReducerMap, createSelector } from '@ngrx/store';

import * as itemReducers from './reducers';


export interface AppStore {
    items: ItemState;
}

export interface ItemState {
    entities: { [id: string]: Item };
}

export const initialState: AppStore = {
    items: { entities: {} }
};

export const applicationReducer: ActionReducerMap<AppStore> = {
    items: itemReducers.reducer,
};

export const getItemsState = (state: AppStore) => state.items;

export const getItems = createSelector(
    getItemsState,
    (state: ItemState) => {
        if (state && state.entities) {
            return Object.values(state.entities);
        }
        return [];
    }
)
