import React,{useState} from 'react'
import store from './store/store'
import * as actions from './actions/actionTypes'

export default function App() {
    store.subscribe(() => console.log(store.getState()))
    const [todos, setTodos] = useState(store.getState())
    const addTodo = () => {
        store.dispatch({
            type:actions.ADD_TODO,
            payload:{
                title:'adresh pandeiya'
            }
        })
    }   
    return (
        <div>
            <p>hello world</p>
            <button onClick={addTodo}>add todo</button>
            {
                todos.map(todo => (
                    <p>{todo.title}</p>)
                )
            }
        </div>
    )
}
