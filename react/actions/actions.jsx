export default {
  remove (donutId, rowId) {
    return {donutId, rowId, type: "REMOVE_DONUT"}
  },
  undo () {
    return {type: "UNDO_MOVE"}
  },
  submit () {
    return {type: "SUBMIT_TURN"}
  }
}
