import React, { Component } from 'react'

class Todo extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = { editing: false }
  }
  remove() {
    this.props.actions.remove(this.props.todo.id);
  }
  edit(){
    this.setState({editing: !this.state.editing});
  }
  render () {
    return (
      <div>
        { this.state.editing
          ? <EditTodo todo={this.props.todo} editing={this.edit.bind(this)} actions={this.props.actions}/>
          : <TodoText todo={this.props.todo} edit={this.edit.bind(this)} remove={this.remove.bind(this)} /> }
      </div>
      )
  }
}

class EditTodo extends Component {
  componentDidMount() {
    this.refs.updateText.focus();
  }
  edit (event) {
    if (this.refs.updateText.value) {
      this.props.actions.update(this.props.todo.id, this.refs.updateText.value)
      this.props.editing()
    }
    event.preventDefault()
  }
  render () {
    return (
      <div>
        <form onSubmit={this.edit.bind(this)}>
          <input ref="updateText" defaultValue={this.props.todo.text} autofocus/>
          <button type="submit">Edit</button>
        </form>
      </div>
    )
  }
}

class TodoText extends Component {
  render () {
    return (
      <div>
        <span onDoubleClick={this.props.edit}>{this.props.todo.text}</span>
        <button onClick={this.props.remove}>X</button>
      </div>
    )
  }
}

export default Todo
