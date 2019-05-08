import { ActionReducerMap, createSelector } from '@ngrx/store';
import { Tag } from 'src/app/model';
import { Item } from './../model';
import * as reducers from './reducers';
import { ActivatedRouteSnapshot, Params, RouterStateSnapshot, Routes } from '@angular/router';
import * as fromRouter from '@ngrx/router-store';


export interface AppRouterState {
    url: string;
    queryParams: Params;
    params: Params;
}


export interface AppStore {
    items: ItemState;
    tags: TagState;
    routes?: fromRouter.RouterReducerState<AppRouterState>;
}

export interface ItemState {
    entities: { [id: string]: Item };
}

export interface TagState {
    entities: { [id: string]: Tag };
}

export const initialState: AppStore = {
    items: { entities: {} },
    tags: { entities: {} },
};

export const applicationReducer: ActionReducerMap<AppStore> = {
    items: reducers.reducer,
    tags: reducers.tagReducer,
    routes: fromRouter.routerReducer
};

export const getItemsState = (state: AppStore) => state.items;
export const getTagState = (state: AppStore) => state.tags;
export const getRouterState = (state: AppStore) => state.routes;

export const getActivatedRoute = createSelector(
    getRouterState,
    (route: fromRouter.RouterReducerState<AppRouterState>) => {
        return route.state.url;
    }
);

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

export const getTag = createSelector(
    getTagState,
    (state: TagState, props: { tagId: string }): Tag => {
        return state.entities[props.tagId];
    }
);




export class CustomSerializer implements fromRouter.RouterStateSerializer<AppRouterState> {
    serialize(routerState: RouterStateSnapshot): AppRouterState {
        const { url } = routerState;
        const { queryParams } = routerState.root;

        let state: ActivatedRouteSnapshot = routerState.root;
        while (state.firstChild) {
            state = state.firstChild;
        }
        const { params } = state;

        return { url, queryParams, params };
    }
}