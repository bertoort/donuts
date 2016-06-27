import React, { Component } from 'react'
import Donut from "./donut.jsx"

class DonutRow extends Component {
  constructor(props, context) {
    super(props, context)
  }
  render () {
    let donuts = this.props.donuts.map(donut => {
      return( <div key={donut.id}>
                <Donut donut={donut} rowId={this.props.rowId} actions={this.props.actions}/>
              </div>
            )
    })
    return (
      <div>
        {donuts}
      </div>
    )
  }
}

export default DonutRow
