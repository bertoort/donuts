import React, { Component } from 'react'

class Donut extends Component {
  constructor(props, context) {
    super(props, context)
  }
  remove() {
    this.props.actions.remove(this.props.donut.id, this.props.rowId);
  }
  render () {
    let donut = `donut ${this.props.donut.flavor}`
    return (
      <div>
        <div className={donut} onClick={this.remove.bind(this)}></div>
      </div>
    )
  }
}

export default Donut
