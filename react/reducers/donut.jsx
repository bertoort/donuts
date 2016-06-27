export const donut = (state, action) => {
  switch (action.type) {
    case 'ADD_DONUT':
      return {
        id: action.id,
      };
    case 'REMOVE_DONUT':
      return state.map(rows => {
        return rows.reduce((newRow, donut) => {
          if (donut.id !== action.id) newRow.push(donut);
          return newRow
        }, [])
      })
    default:
      return state;
  }
};
