export const donut = (state, action) => {
  switch (action.type) {
    case 'DISPLAY_LOADING':
      state.loading = true
      state.intro = false
      return state
    case 'COMPUTER_TURN':
      state.donuts = action.data
      evaluateTurn(state)
      return state
    case 'LOAD_DONUTS':
      delete state.currentRow
      delete state.savedDonuts
      delete state.oneRow
      delete state.message
      state.over = false
      state.donuts = action.data
      state.loading = false
      state.currentTurn = "A"
      return state
    case 'SUBMIT_TURN':
      evaluateTurn(state)
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
      if (state.computer && state.currentTurn === "B") {
        return state
      } else if (state.currentRow == undefined) {
        state.currentRow = action.rowId
      }
      if (!state.savedDonuts) {
        state.savedDonuts = JSON.parse(JSON.stringify(state.donuts))
      }
      state.donuts = state.donuts.map(rows => {
        return rows.reduce((newRow, donut) => {
          if (donut.id !== action.donutId || state.currentRow !== action.rowId) {
            newRow.push(donut)
          } else if (state.oneRow && rows.length === 1) {
            newRow.push(donut)
          }
          return newRow
        }, [])
      })
      return state
    default:
      return state;
  }
};

const isOver = game => {
  let length = game.reduce((length, row) => {
    return length += row.length
  }, 0)
  return length > 1 ? false : true
}

const winnerMessage = (turn, isComputer) => {
  let message = ""
  if (isComputer) {
    if (turn === "A") {
      message = "You Won!! 🎉"
    } else {
      message = "The Computer Won 🎉 \n Reset to Play Again"
    }
  } else {
    if (turn === "A") {
      message = "First Player Won 🎉"
    } else {
      message = "Second Player Won 🎉"
    }
  }
  return message
}

const evaluateTurn = state => {
  delete state.currentRow
  delete state.savedDonuts
  let emptyRows = 0
  state.donuts.forEach(function (row) {
    if (row.length === 0) emptyRows++
  })
  if (emptyRows >= 2) {
    state.oneRow = true
  }
  if (state.oneRow && isOver(state.donuts)) {
    state.over = true
    state.message = winnerMessage(state.currentTurn, state.computer)
  } else if (state.currentTurn === "A") {
    state.currentTurn = "B"
  } else {
    state.currentTurn = "A"
  }
}
