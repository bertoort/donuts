import React, {Component, PropTypes} from "react"
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import DonutRow from "./donutRow.jsx"
import DonutActions from "./../actions/actions.jsx"

class Donut extends Component {
  render () {
    let donutRows = this.props.donuts.map((_, i) => {
      return( <li key={i} className="row">
                <DonutRow donuts={this.props.donuts[i]} actions={this.props.actions}/>
              </li>
            )
    })
    return (
      <div>
        <h1> Donuts </h1>
        <ul>
          {donutRows}
        </ul>
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
