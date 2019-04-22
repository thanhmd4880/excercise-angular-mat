import { Action } from '@ngrx/store';
import {ActionTypes} from './index';

import {initialViewditemsState} from './index';
import {Add} from './index';

export function viewedItemReducer(state = initialViewditemsState.viewedItems, action) {
    switch (action.type) {
        case 'SETLIST':
            return [...action.viewedItemsList];
        case 'ADD':
            // check if viewed item already in list
            const viewedItem = {id: action.id, title: action.title, content: action.content};
            const currentState = [...state];
            const indexItem = currentState.findIndex((item) => {
                return item.id === viewedItem.id;
            });
            if (indexItem !== -1) {
                currentState.splice(indexItem, 1);
                state = currentState;
            }

            const temp = [viewedItem, ...state];
            if (temp.length > 10) {
                temp.length = 10;
            }
            return temp;
        default:
            return state;
    }
}
