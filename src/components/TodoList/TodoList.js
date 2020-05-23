import React, { Component } from "react";
import Todo from "../Todo/Todo";
import NewTodoForm from "../NewTodoForm/NewTodoForm";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.create = this.create.bind(this);
  }

  remove(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  }
  create(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  }

  render() {
    const todos = this.state.todos.map((task) => {
      return (
        <Todo
          todo={task}
          key={task.id}
          id={task.id}
          removeTodo={() => this.remove(task.id)}
        />
      );
    });

    return (
      <div>
        <NewTodoForm createTodo={this.create} />
        {todos}
      </div>
    );
  }
}

export default TodoList;
