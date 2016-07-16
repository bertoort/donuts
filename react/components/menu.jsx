import React, { Component } from 'react'

class Menu extends Component {
  open () {
    $('#rules').openModal();
  }
  render () {
    return (
      <div className="fixed-action-btn fixed-action horizontal click-to-toggle" >
        <a className={`btn-floating  btn-large waves-effect waves-light pink accent-1`} data-position="top" data-delay="30" data-tooltip="Click Here!">
          <i className="material-icons">menu</i>
        </a>
        <ul>
          <li><a href="https://github.com/berto/donuts" target="_blank" className="btn-floating tooltipped waves-effect waves-light pink accent-1" data-position="bottom" data-delay="30" data-tooltip="Code"><i className="fa fa-github" aria-hidden="true"></i></a></li>
          <li><a href="http://bertoort.com" target="_blank" className="btn-floating tooltipped waves-effect waves-light pink accent-1" data-position="bottom" data-delay="30" data-tooltip="Profile"><i className="fa fa-user" aria-hidden="true"></i></a></li>
          <li ><a onClick={this.open.bind(this)} className="btn-floating tooltipped waves-effect waves-light pink accent-1" data-position="bottom" data-delay="30" data-tooltip="Rules"><i className="fa fa-book" aria-hidden="true"></i></a></li>
        </ul>
      </div>
    )
  }
}

export default Menu
