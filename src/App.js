import React from 'react'
import store from './store/store'

//this is new

export default function App() {
    console.log(store.getState())
    return (
        <div>
            <p>hello world</p>
        </div>
    )
}
