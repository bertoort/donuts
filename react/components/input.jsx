import React, { Component, PropTypes } from 'react'

class TodoInput extends Component {
  add (event) {
    let input = this.todo;
    if (input.value) {
      this.props.addTodo(input.value);
      input.value = "";
    }
    event.preventDefault()
  }
  render () {
    return (
      <form onSubmit={this.add.bind(this)}>
        <input ref={(ref) => this.todo = ref} />
        <button type="submit"> Add to List </button>
      </form>
    )
  }
}

TodoInput.propTypes = {
  add: PropTypes.func,
  todo: PropTypes.string
}

export default TodoInput
