import React from "react"
import {createStore} from "redux"
import {render} from "react-dom"
import Donuts from "./../components/donuts.jsx"
import { Provider } from 'react-redux'
import {donutGame} from "./../reducers/donutGame.jsx"

require('!raw!sass!../../sass/style.scss');

render(
  <Provider store={createStore(donutGame)}>
    <Donuts/>
  </Provider>
  , document.getElementById('donuts')
)
