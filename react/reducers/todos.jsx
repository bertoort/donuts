import {todo} from "./todo.jsx";
import initialData from "../app/data.js"

export const todos = (state = initialData.todos, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];
    case 'UPDATE_TODO':
      return state.map(singleTodo => {
        return todo(singleTodo, action)
      })
    case 'REMOVE_TODO':
      return todo(state, action)
    default:
      return state;
  }
};
