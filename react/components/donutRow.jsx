import React, { Component } from 'react'
import Donut from "./donut.jsx"

class DonutRow extends Component {
  render () {
    let donuts = this.props.donuts.map(donut => {
      return( <div key={donut.id}>
                <Donut donut={donut} actions={this.props.actions}/>
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
