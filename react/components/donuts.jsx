import React, {Component, PropTypes} from "react"
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import DonutRow from "./donutRow.jsx"
import DonutActions from "./../actions/actions.jsx"
import {Buttons, Reset} from "./buttons.jsx"

class Donut extends Component {
  render () {
    return (
      <div className="row">
        <div className="col s12">
          <h1 className="left title"> Don't Take The Last Donut!! </h1>
          { !this.props.game.loading ? <Reset actions={this.props.actions}/> : undefined }
        </div>
        <div className="col s12">
          { this.props.game.loading ?
            <LoadingDonut donuts={this.props.donuts} actions={this.props.actions} game={this.props.game}/> :
            <Game donuts={this.props.donuts} actions={this.props.actions} game={this.props.game} />
           }
        </div>
        <div className="fixed-action-btn horizontal click-to-toggle" >
          <a className="btn-floating btn-large waves-effect waves-light pink accent-1">
            <i className="material-icons">menu</i>
          </a>
          <ul>
            <li><a className="btn-floating waves-effect waves-light pink accent-1"><i className="fa fa-github" aria-hidden="true"></i></a></li>
            <li><a className="btn-floating waves-effect waves-light pink accent-1"><i className="fa fa-user" aria-hidden="true"></i></a></li>
            <li><a className="btn-floating waves-effect waves-light pink accent-1"><i className="material-icons">attach_file</i></a></li>
          </ul>
        </div>
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
      <div >
        {donutRows}
        {this.props.game.currentRow !== undefined? <Buttons actions={this.props.actions}/> : undefined}
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
