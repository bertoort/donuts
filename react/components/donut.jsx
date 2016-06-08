import React, { Component } from 'react'

class Donut extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = { editing: false }
  }
  remove() {
    this.props.actions.remove(this.props.donut.id);
  }
  edit(){
    this.setState({editing: !this.state.editing});
  }
  render () {
    return (
      <div>
        { this.state.editing
          ? <EditDonut donut={this.props.donut} editing={this.edit.bind(this)} actions={this.props.actions}/>
          : <DonutText donut={this.props.donut} edit={this.edit.bind(this)} remove={this.remove.bind(this)} /> }
      </div>
      )
  }
}

class EditDonut extends Component {
  componentDidMount() {
    this.refs.updateText.focus();
  }
  edit (event) {
    if (this.refs.updateText.value) {
      this.props.actions.update(this.props.donut.id, this.refs.updateText.value)
      this.props.editing()
    }
    event.preventDefault()
  }
  render () {
    return (
      <div>
        <form onSubmit={this.edit.bind(this)}>
          <input ref="updateText" defaultValue={this.props.donut.text} autofocus/>
          <button type="submit">Edit</button>
        </form>
      </div>
    )
  }
}

class DonutText extends Component {
  render () {
    return (
      <div>
        <div className="donut sprinkles" onClick={this.props.remove}></div>
      </div>
    )
  }
}

export default Donut
