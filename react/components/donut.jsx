import React, { Component } from 'react'

class Donut extends Component {
  constructor(props, context) {
    super(props, context)
  }
  remove() {
    if (!(this.props.game.computer && this.props.game.currentTurn === "B" || this.props.game.over)) {
      this.props.actions.remove(this.props.donut.id, this.props.rowId);
    }
  }
  render() {
    let donut = `donut ${this.props.donut.flavor}`
    return (
      <div>
        <div className={donut} onClick={this.remove.bind(this)}></div>
      </div>
    )
  }
}

export default Donut
