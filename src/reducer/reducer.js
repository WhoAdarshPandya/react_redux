import * as actions from '../actions/actionTypes'
import {v4 as uuid} from 'uuid'

const TODO_INITIAL_STATE = []

export default (state = TODO_INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.ADD_TODO:
            return [
                ...state,
                {
                    id: uuid(),
                    title : action.payload.title,
                    completed:false
                }
            ];
        case actions.REMOVE_TODO:
            return [];
        case actions.CHECK_TODO:
            return [];
        default:
            return state;
    }
};