import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {addTodo} from './actions/Actions'

export default function App() {
    const todos = useSelector(state => state)
    const dispatch = useDispatch();
    const addTodos = () => {
        dispatch(addTodo())
    }   
    return (
        <div>
            <p>hello world</p>
            <p>todo's length : {todos.length}</p>
            <button onClick={addTodos}>add todo</button>
            {
                todos.map(todo => (<p>{todo.title}</p>))
            }            
        </div>
    )
}
