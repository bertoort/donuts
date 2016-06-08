import React, {Component, PropTypes} from "react"
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Donuts from "./donutRow.jsx"
import DonutActions from "./../actions/actions.jsx"

class Donut extends Component {
  render () {
    const { donuts, actions } = this.props
    return (
      <div>
        <h1> Donuts </h1>
        <Donuts donuts={donuts} actions={actions}/>
      </div>
    )
  }
}

Donut.propTypes = {
  donuts: PropTypes.array,
  actions: PropTypes.object
}

function mapStateToProps(state) {
  return {
    donuts: state.donuts
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
