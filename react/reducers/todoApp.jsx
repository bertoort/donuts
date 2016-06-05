import { combineReducers } from "redux";
import {todos} from "./todos.jsx"

export const todoApp = combineReducers({
  todos
});
