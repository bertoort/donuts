import React, { Component } from 'react'

class Buttons extends Component {
  constructor(props, context) {
    super(props, context)
  }
  submit() {
    this.props.actions.submit();
  }
  undo() {
    this.props.actions.undo();
  }
  render () {
    return (
      <div>
        <button className="btn" onClick={this.submit.bind(this)}>Submit</button>
        <button className="btn" onClick={this.undo.bind(this)}>Undo</button>
      </div>
    )
  }
}

export default Buttons
