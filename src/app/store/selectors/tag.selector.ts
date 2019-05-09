import { createSelector } from '@ngrx/store';
import { AppStore } from './../index';
import { Tag } from 'src/app/model';

export interface TagState {
    entities: { [id: string]: Tag };
}
export const getTagState = (state: AppStore) => state.tags;

export const allTags = createSelector(
    getTagState,
    (state: TagState) => {
        if (state && state.entities) {
            return Object.values(state.entities);
        }
        return [];
    }
);

export const tag = createSelector(
    getTagState,
    (state: TagState, props: { tagId: string }): Tag => {
        return state.entities[props.tagId];
    }
);

export const superTags = createSelector(
    getTagState,
    (state: TagState): Tag[] => {
        if (state && state.entities) {
            return Object.values(state.entities).filter((it: Tag) => it.super);
        } else {
            return [];
        }
    }
);

export const favoriteTags = createSelector(
    getTagState,
    (state: TagState): Tag[] => {
        if (state && state.entities) {
            return Object.values(state.entities).filter((it: Tag) => it.favorite);
        }
        return [];
    }
);
