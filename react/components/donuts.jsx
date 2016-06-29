import React, {Component, PropTypes} from "react"
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import DonutRow from "./donutRow.jsx"
import DonutActions from "./../actions/actions.jsx"
import {Buttons, Reset} from "./buttons.jsx"

class Donut extends Component {
  render () {
    return (
      <div>
        <h1> Donuts </h1>
        { this.props.game.loading ?
          <LoadingDonut donuts={this.props.donuts} actions={this.props.actions} game={this.props.game}/> :
          <Game donuts={this.props.donuts} actions={this.props.actions} game={this.props.game} />
         }
      </div>
    )
  }
}

class Game extends Component {
  render() {
    let donutRows = this.props.donuts.map((_, i) => {
      return (
        <li key={i} className="row">
          <DonutRow donuts={this.props.donuts[i]} rowId={i} actions={this.props.actions}/>
        </li>
      )
    })
    return (
      <div className="container">
        <ul>
          {donutRows}
        </ul>
        {this.props.game.currentRow !== undefined? <Buttons actions={this.props.actions}/> : undefined}
        <Reset actions={this.props.actions}/>
      </div>
    )
  }
}

class LoadingDonut extends Component {
  render() {
    return <div className="donut sprinkles loading"></div>
  }
}

Donut.propTypes = {
  donuts: PropTypes.array,
  game: PropTypes.object,
  actions: PropTypes.object
}

function mapStateToProps(state) {
  return {
    game: state.game,
    donuts: state.game.donuts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(DonutActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Donut)
