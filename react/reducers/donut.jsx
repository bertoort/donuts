export const donut = (state, action) => {
  switch (action.type) {
    case 'LOAD_DONUTS':
      delete state.currentRow
      delete state.savedDonuts
      state.donuts = action.data
      return state
    case 'SUBMIT_TURN':
      delete state.currentRow
      delete state.savedDonuts
      return state
    case 'UNDO_MOVE':
      if (state.savedDonuts) state.donuts = state.savedDonuts
      delete state.savedDonuts
      delete state.currentRow
      return state
    case 'REMOVE_DONUT':
      if (state.currentRow == undefined) state.currentRow = action.rowId
      if (!state.savedDonuts) {
        state.savedDonuts = JSON.parse(JSON.stringify(state.donuts))
      }
      state.donuts = state.donuts.map(rows => {
        return rows.reduce((newRow, donut) => {
          if (donut.id !== action.donutId || state.currentRow !== action.rowId) {
            newRow.push(donut)
          };
          return newRow
        }, [])
      })
      return state
    default:
      return state;
  }
};
