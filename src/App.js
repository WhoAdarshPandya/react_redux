import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addTodo , removeTodo} from './actions/Actions'

export default function App() {
    const todos = useSelector(state => state)
    const dispatch = useDispatch();
    const addTodos = () => {
        dispatch(addTodo())
    }  
    const removeTodos = id => {
        dispatch(removeTodo(id))
    } 
    return (
        <div>
            <p>hello world</p>
            <p>todo's length : {todos.length}</p>
            <button onClick={addTodos}>add todo</button>
            {
                todos.map(todo => (
                    <p onClick={() => {removeTodos(todo.id)}}>
                        {todo.title}
                    </p>))
            }            
        </div>
    )
}
