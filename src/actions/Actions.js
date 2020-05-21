import * as actions from './actionTypes'

export const addTodo = () => {
    return {
        type:actions.ADD_TODO,
        payload:{
            title:"bum bum"
        }
    }
}