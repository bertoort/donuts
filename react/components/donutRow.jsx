import React, { Component } from 'react'
import Donut from "./donut.jsx"

class DonutRow extends Component {
  render () {
    let donuts = this.props.donuts.map(donut => {
      return( <li key={donut.id}>
                <Donut donut={donut} actions={this.props.actions}/>
              </li>
            )
    })
    return (
      <ul>
        {donuts}
      </ul>
    )
  }
}

export default DonutRow
