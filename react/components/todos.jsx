import React, {Component, PropTypes} from "react"
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import TodoInput from "./input.jsx"
import Todos from "./todoList.jsx"
import TodoActions from "./../actions/actions.jsx"

class Todo extends Component {
  render () {
    const { todos, actions } = this.props
    return (
      <div>
        <h1> To Do's </h1>
        <TodoInput addTodo={actions.add}/>
        <Todos todos={todos} actions={actions}/>
      </div>
    )
  }
}

Todo.propTypes = {
  todos: PropTypes.array,
  actions: PropTypes.object
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo)
