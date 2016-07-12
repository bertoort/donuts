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
        <button className="btn waves-effect waves-light pink accent-1" onClick={this.submit.bind(this)}>Submit</button>
        <button className="btn waves-effect waves-light pink accent-1" onClick={this.undo.bind(this)}>Undo</button>
      </div>
    )
  }
}

class Reset extends Component {
  constructor(props, context) {
    super(props, context)
  }
  reset() {
    this.props.actions.loading()
    this.props.actions.fetchDonuts()
  }
  render () {
    return (
      <div>
        <button className="btn reset waves-effect waves-light pink accent-1" onClick={this.reset.bind(this)}>Reset</button>
      </div>
    )
  }
}

class Turn extends Component {
  constructor(props, context) {
    super(props, context)
  }
  switchMode() {
    this.props.actions.switchMode()
  }
  render () {
    let turn = this.props.game.currentTurn
    let computer = this.props.game.computer
    let icon = 'fa-user'
    let text = 'VS AI'
    if (computer) {
      icon = 'fa-cogs'
      text = 'VS Player'
    }
    let a = turn === "A" ? "tooltipped" : "disabled"
    let b = turn === "B" ? "tooltipped" : "disabled"
    return (
      <div className="turn">
        <button className={`btn-floating waves-effect waves-light pink accent-1 ${a}`} ><i className="fa fa-user"></i></button>
        <button className={`btn-floating waves-effect waves-light pink accent-1 ${b}`} ><i className={`fa ${icon}`}></i></button>
        <button className="waves-effect waves-light pink accent-1 btn" onClick={this.switchMode.bind(this)}>{text}</button>
      </div>
    )
  }
}

class Options extends Component {
  constructor(props, context) {
    super(props, context)
  }
  render () {
    return (
      <div>
        <Reset actions={this.props.actions}/>
        <Turn actions={this.props.actions} game={this.props.game}/>
      </div>
    )
  }
}

export default {
  Buttons,
  Options
}
