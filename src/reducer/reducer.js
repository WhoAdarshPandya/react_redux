import * as actions from '../actions/actionTypes'

const TODO_INITIAL_STATE = []

export default (state = TODO_INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.ADD_TODO:
            return [
                ...state,
                ...action.payload
            ];
        case actions.REMOVE_TODO:
            return [];
        case actions.CHECK_TODO:
            return [];
        default:
            return state;
    }
};