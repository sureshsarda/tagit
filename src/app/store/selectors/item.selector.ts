import { createSelector } from '@ngrx/store';
import { AppStore } from './../index';
import { Item } from './../../model/models';

export interface ItemState {
    entities: { [id: string]: Item };
}

export const getItemsState = (state: AppStore) => state.items;
export const getItems = createSelector(
    getItemsState,
    (state: ItemState) => {
        if (state && state.entities) {
            return Object.values(state.entities);
        }
        return [];
    }
);

export const getActiveItems = createSelector(
    getItemsState,
    (state: ItemState) => {
        if (state && state.entities) {
            return Object.values(state.entities).filter(it => !(it.completed_at || it.deleted_at));
        }
        return [];
    }
)

export const getItemsForTag = createSelector(
    getItemsState,
    (state: ItemState) => {
        if (state && state.entities) {
            return Object.values(state.entities);
        }
        return [];
    }
);
