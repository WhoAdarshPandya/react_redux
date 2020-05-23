import React from "react";
import { Typography } from "@material-ui/core";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from './components/TodoList/TodoList'

export default function App() {
  return (
    <div>
      {" "}
      <Typography color="secondary" variant="h2" align="center">
        To Do
      </Typography>
      <div style={{ width: "50%", margin: "auto" }}>
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
}
