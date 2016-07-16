import React, { Component } from 'react'

class Intro extends Component {
  start() {
    this.props.actions.loading()
    this.props.actions.fetchDonuts(3);
  }
  render () {
    return (
      <div className="row">
        <div className="col s7">
          <div className="donut image sprinkles intro"></div>
          <div className="donut image chocolate intro"></div>
          <div className="donut image glazed intro"></div>
        </div>
        <div className="intro">
          <div className="col s6">
            <h5>Yay donuts!</h5>
            <p>
              So nice of your office friend to bring everyone a box of donuts.
              Eat as many as you want from any row... but don't eat the last donut.
              Nobody wants to be that guy.
            </p>
            <p>
              Click start to play
            </p>
            <p>
              (If you'd like to read the rules more carefully, click the hamburger menu in the corner
              and then the little book. Have fun!)
            </p>
            <button className="btn waves-effect waves-light pink accent-1" onClick={this.start.bind(this)}>Start</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Intro
