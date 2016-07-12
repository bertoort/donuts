import React, { Component } from 'react'
import DonutRow from "./donutRow.jsx"
import {Buttons, Options} from "./buttons.jsx"

class Donuts extends Component {
  render () {
    return (
      <div className="col s12">
        { this.props.game.loading ?
          <LoadingDonut donuts={this.props.donuts} actions={this.props.actions} game={this.props.game}/> :
          <Board donuts={this.props.donuts} actions={this.props.actions} game={this.props.game} />
         }
      </div>
    )
  }
}

class Board extends Component {
  render() {
    let donutRows = this.props.donuts.map((_, i) => {
      return (
        <div key={i} className="row">
          <DonutRow donuts={this.props.donuts[i]} rowId={i} actions={this.props.actions}/>
        </div>
      )
    })
    return (
      <div >
        <h5>{this.props.game.message}</h5>
        {donutRows}
        {this.props.game.currentRow !== undefined? <Buttons actions={this.props.actions}/> : undefined}
        { !this.props.game.loading ? <Options game={this.props.game} actions={this.props.actions}/> : undefined }
      </div>
    )
  }
}

class LoadingDonut extends Component {
  render() {
    return (
      <div className="donut sprinkles loading"></div>
    )
  }
}

export default Donuts
