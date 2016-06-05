import React from "react"
import {createStore} from "redux"
import {render} from "react-dom"
import Todo from "./../components/todos.jsx"
import { Provider } from 'react-redux'
import {todoApp} from "./../reducers/todoApp.jsx"

render(
  <Provider store={createStore(todoApp)}>
    <Todo/>
  </Provider>
  , document.getElementById('todo')
)
