import React, {Component, PropTypes} from "react"
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import DonutRow from "./donutRow.jsx"
import DonutActions from "./../actions/actions.jsx"
import Buttons from "./buttons.jsx"

class Donut extends Component {
  render () {
    let donutRows = this.props.donuts.map((_, i) => {
      return(
              <li key={i} className="row">
                <DonutRow donuts={this.props.donuts[i]} rowId={i} actions={this.props.actions}/>
              </li>
            )
    })
    return (
      <div>
        <h1> Donuts </h1>
        <div className="container">
          <ul>
            {donutRows}
          </ul>
          {this.props.game.currentRow !== undefined? < Buttons actions={this.props.actions}/> : undefined}
        </div>
      </div>
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
