export const donut = (state, action) => {
  switch (action.type) {
    case 'ADD_DONUT':
      return {
        id: action.id,
        text: action.text,
      };
    case 'UPDATE_DONUT':
      if (state.id !== action.id) {
        return state
      }
      return {
        id: action.id,
        text: action.text
      }
    case 'REMOVE_DONUT':
      return state.reduce((newState, donut) => {
        donut.id !== action.id ? newState.push(donut) : null
        return newState
      }, [])
    default:
      return state;
  }
};
