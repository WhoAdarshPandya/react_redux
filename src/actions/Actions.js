import * as actions from './actionTypes'

export const addTodo = (title) => {
    return {
        type:actions.ADD_TODO,
        payload:{
            title
        }
    } 
}

export const removeTodo = (id) => {
    return {
        type:actions.REMOVE_TODO,
        payload:{
            id
        }
    }
}

export const checkTodo = (id) => {
    return {
        type:actions.CHECK_TODO,
        payload:{
            id
        }
    }
}