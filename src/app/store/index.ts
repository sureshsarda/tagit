import { ActivatedRouteSnapshot, Params, RouterStateSnapshot } from '@angular/router';
import * as fromRouter from '@ngrx/router-store';
import { ActionReducerMap, createSelector } from '@ngrx/store';
import * as reducers from './reducers';
import { ItemState, TagState, getTagState } from './selectors';


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



export const initialState: AppStore = {
    items: { entities: {} },
    tags: { entities: {} },
};

export const applicationReducer: ActionReducerMap<AppStore> = {
    items: reducers.reducer,
    tags: reducers.tagReducer,
    routes: fromRouter.routerReducer
};

export const getRouterState = (state: AppStore) => state.routes;
export const getActivatedRoute = createSelector(
    getRouterState,
    (route: fromRouter.RouterReducerState<AppRouterState>) => {
        return route.state.url;
    }
);

export const getActivatedTag = createSelector(
    getRouterState,
    getTagState,
    (route: fromRouter.RouterReducerState<AppRouterState>, tagState: TagState) => {
        const tagId = route.state.params.id;
        if (tagState && tagState.entities && tagState.entities[tagId]) {
            return tagState.entities[tagId];
        } else {
            return null;
        }
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