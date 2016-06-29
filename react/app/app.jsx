import React from "react"
import {createStore, applyMiddleware} from "redux"
import {render} from "react-dom"
import Donuts from "./../components/donuts.jsx"
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import {donutGame} from "./../reducers/donutGame.jsx"
import {fetchDonuts} from "../actions/actions.jsx"

require('!raw!sass!../../sass/style.scss');

const store = createStore(donutGame, applyMiddleware(thunk))

store.dispatch(fetchDonuts(3))

render(
  <Provider store={store}>
    <Donuts/>
  </Provider>
  , document.getElementById('donuts')
)
