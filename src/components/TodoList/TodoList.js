import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Paper,
  Zoom,
  Checkbox,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemIcon,
  IconButton,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { removeTodo, checkTodo } from "../../actions/Actions";

export default function TodoList() {
  const todos = useSelector((state) => state);
  const dispatcher = useDispatch();

  const checkTheTodos = (id) => {
    dispatcher(checkTodo(id));
  };

  const deleteTheTodo = (id) => {
    dispatcher(removeTodo(id));
  };

  return (
    <List style={{ width: "100%" }}>
      {todos.map((todo) => (
        <Zoom in={true}>
          <Paper
            style={
              todo.completed
                ? { marginTop: "10px", background: "#dcdde1" }
                : { marginTop: "10px" }
            }
          >
            <ListItem>
              <ListItemIcon>
                <Checkbox
                  checked={todo.completed}
                  onChange={() => {
                    checkTheTodos(todo.id);
                  }}
                />
              </ListItemIcon>
              <ListItemText
                style={todo.completed ? { color: "gray" } : {}}
                primary={todo.title}
              />
              <ListItemSecondaryAction>
                <IconButton onClick={() => deleteTheTodo(todo.id)}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </Paper>
        </Zoom>
      ))}
    </List>
  );
}
