export const donut = (state, action) => {
  switch (action.type) {
    case 'DISPLAY_LOADING':
      state.loading = true
      state.intro = false
      return state
    case 'LOAD_DONUTS':
      delete state.currentRow
      delete state.savedDonuts
      state.donuts = action.data
      state.loading = false
      state.intro = false
      state.currentTurn = "A"
      return state
    case 'SUBMIT_TURN':
      delete state.currentRow
      delete state.savedDonuts
      if (state.currentTurn === "A") {
        state.currentTurn = "B"
      } else {
        state.currentTurn = "A"
      }
      return state
    case 'UNDO_MOVE':
      if (state.savedDonuts) state.donuts = state.savedDonuts
      delete state.savedDonuts
      delete state.currentRow
      return state
    case 'SWITCH_MODE':
      state.computer = !state.computer
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
