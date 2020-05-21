import React from 'react'
import store from './store/store'

export default function App() {
    console.log(store.getState())
    return (
        <div>
            <p>hello world</p>
        </div>
    )
}
