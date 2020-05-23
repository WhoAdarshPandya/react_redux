import React,{useState} from 'react'
import {TextField, Button} from '@material-ui/core'
import {useDispatch} from 'react-redux'
import {addTodo} from '../../actions/Actions'

export default function TodoInput() {
    const [text, setText] = useState("");
    const dispatch = useDispatch()
    const changeText = e => {
        setText(e.target.value)
    };
    const submitTodo = () => {
        if(text !== "")
        {
            dispatch(addTodo(text))
            setText("")
        }
    };
    const keyP = e => {
        if(e.key === "Enter" && text !== "")
        {
            submitTodo()
        }
    }
    return (
        <div style={{width:'100%',textAlign:'center'}}>
            <TextField
                style={{width:'100%'}}
                color="secondary"
                onKeyPress={(e) => keyP(e)}
                onChange={(e) => {changeText(e)}}
                value={text}
                label="enter todo"
            />
            <br/>
            <br/>
            <Button onClick={() => {submitTodo()}} variant="contained" color="secondary">SUBMIT</Button>
        </div>
    )
}
