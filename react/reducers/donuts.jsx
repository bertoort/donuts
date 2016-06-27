import {donut} from "./donut.jsx";
import initialData from "../app/data.js"

export const donuts = (state = initialData.donuts, action) => {
  switch (action.type) {
    case 'ADD_DONUT':
      return [
        ...state,
        donut(undefined, action)
      ];
    case 'REMOVE_DONUT':
      return donut(state, action)
    default:
      return state;
  }
};
