import * as actions from './actionTypes'

export const addTodo = () => {
    return {
        type:actions.ADD_TODO,
        payload:{
            title:"bum bum"
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