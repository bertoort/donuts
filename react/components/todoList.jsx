import React, { Component } from 'react'
import Todo from "./todo.jsx"

class TodoList extends Component {
  render () {
    let todos = this.props.todos.map(todo => {
      return( <li key={todo.id}>
                <Todo todo={todo} actions={this.props.actions}/>
              </li>
            )
    })
    return (
      <ul>
        {todos}
      </ul>
    )
  }
}

export default TodoList
