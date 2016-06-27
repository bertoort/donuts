import {donut} from "./donut.jsx";
import initialDonuts from "../app/data.js"

let initialState = {
  //currentRow & temporaryState while editing a row
  playerTurn: true,
  donuts: initialDonuts,
}

export const game = (state = initialState, action) => {
  let stateClone = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case 'REMOVE_DONUT':
      return donut(stateClone, action)
    case 'UNDO_MOVE':
      return donut(stateClone, action)
    case 'SUBMIT_TURN':
      return donut(stateClone, action)
    default:
      return state;
  }
};
