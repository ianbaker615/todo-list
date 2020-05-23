import React from "react";

function Todo(props) {
  return (
    <div>
      <div>{props.todo.todo}</div>
      <button onClick={props.removeTodo}>X</button>
    </div>
  );
}

export default Todo;
