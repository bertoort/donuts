import React, {Component, PropTypes} from "react"
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import DonutActions from "./../actions/actions.jsx"
import Menu from "./menu.jsx"
import Intro from "./intro.jsx"
import {Donuts} from "./donuts.jsx"
import Rules from "./rules.jsx"

class Game extends Component {
  render () {
    return (
      <div className="row">
        <div className="col s12">
          <h1 className="left title"> Don't Take The Last Donut!!</h1>
        </div>
        { this.props.game.intro ?
          <Intro actions={this.props.actions}/> :
          <Donuts donuts={this.props.donuts} actions={this.props.actions} game={this.props.game} />
         }
        <Rules />
        <Menu />
      </div>
    )
  }
}

Game.propTypes = {
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
)(Game)
