import { Tag } from 'src/app/model';
import { Item } from './../model';
import { ActionReducerMap, createSelector } from '@ngrx/store';

import * as itemReducers from './reducers';


export interface AppStore {
    items: ItemState;
    tags: TagState;
}

export interface ItemState {
    entities: { [id: string]: Item };
}

export interface TagState {
    entities: { [id: string]: Tag };
}

export const initialState: AppStore = {
    items: { entities: {} },
    tags: { entities: {} }
};

export const applicationReducer: ActionReducerMap<AppStore> = {
    items: itemReducers.reducer,
    tags: itemReducers.tagReducer
};

export const getItemsState = (state: AppStore) => state.items;
export const getTagState = (state: AppStore) => state.tags;

export const getItems = createSelector(
    getItemsState,
    (state: ItemState) => {
        if (state && state.entities) {
            return Object.values(state.entities);
        }
        return [];
    }
);

export const getTags = createSelector(
    getTagState,
    (state: TagState) => {
        if (state && state.entities) {
            return Object.values(state.entities);
        }
        return [];
    }
);
