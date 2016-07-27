import {donut} from "./donut.jsx";

let initialState = {
  donuts: [[], [], []],
  loading: true,
  intro: true,
  currentTurn: "A",
  computer: true,
  over: false,
}

export const game = (state = initialState, action) => {
  let stateClone = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case 'DISPLAY_LOADING':
      return donut(stateClone, action)
    case 'COMPUTER_TURN':
      return donut(stateClone, action)
    case 'LOAD_DONUTS':
      return donut(stateClone, action)
    case 'REMOVE_DONUT':
      return donut(stateClone, action)
    case 'UNDO_MOVE':
      return donut(stateClone, action)
    case 'SUBMIT_TURN':
      return donut(stateClone, action)
    case 'SWITCH_MODE':
      return donut(stateClone, action)
    default:
      return state;
  }
};
