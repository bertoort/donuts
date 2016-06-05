export const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
      };
    case 'UPDATE_TODO':
      if (state.id !== action.id) {
        return state
      }
      return {
        id: action.id,
        text: action.text
      }
    case 'REMOVE_TODO':
      return state.reduce((newState, todo) => {
        todo.id !== action.id ? newState.push(todo) : null
        return newState
      }, [])
    default:
      return state;
  }
};
