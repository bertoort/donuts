import React, { Component } from 'react'

class Rules extends Component {
  render() {
    return (
      <div id="rules" className="modal">
        <div className="modal-content">
          <h4>Rules</h4>
          <p>
            In each game, the donuts are grouped into three horizontal rows.
          </p>
          <p>
            You play by taking turns at removing the donuts from the game. On a turn you may remove as many donuts as you like from any one row.
          </p>
          <p>
            The person who leaves the last donut for the other player to take is the winner.
          </p>
        </div>
        <div className="modal-footer">
          <a className="modal-action modal-close waves-effect waves-red btn-flat">Close</a>
        </div>
      </div>
    )
  }
}

export default Rules
