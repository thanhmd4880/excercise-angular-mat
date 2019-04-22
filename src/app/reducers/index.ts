import {
    Action,
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

export interface IViewedItem {
    id: number;
    title: string;
    content: string;
}
export interface IViewedItems {
    viewedItems: IViewedItem[];
}

export const initialViewditemsState: IViewedItems =  {
    viewedItems: [
        // {title: 'test title 1', content: 'test content 1'},
        // {title: 'test title 2', content: 'test content 2'}
    ]
};

// export interface IAppState {
//     viewedItems: IViewedItems;
// }
//
// export const initialAppState: IAppState = {
//     viewedItems: initialViewditemsState
// };

// export const reducers: ActionReducerMap<State> = {
//
// };
//
//
// export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

/* Actions */
export enum ActionTypes {
    Add = 'ADD',
    // Remove = '[ViewedItems Component] Decrement',
    GetList = 'GETLIST',
    SetList = 'SETLIST'
}

export class Add implements Action {
    readonly type = ActionTypes.Add;
    constructor(public id: number, public title: string, public content: string) {}
}

// export class Remove implements Action {
//     readonly type = ActionTypes.Remove;
// }

export class GetList implements Action {
    readonly type = ActionTypes.GetList;
}

export class SetList implements Action {
    readonly type = ActionTypes.SetList;
    constructor(public viewedItemsList: any[]) {}
}
