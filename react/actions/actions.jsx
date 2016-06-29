import $ from 'jquery'

function load(data) {
  return {data, type: "LOAD_DONUTS"}
}

export default {
  remove (donutId, rowId) {
    return {donutId, rowId, type: "REMOVE_DONUT"}
  },
  undo () {
    return {type: "UNDO_MOVE"}
  },
  submit () {
    return {type: "SUBMIT_TURN"}
  },
  fetchDonuts(rows) {
    return function (dispatch) {
      return $.get(`/random-board?rows=${rows}`)
        .done(data => dispatch(load(data)))
    }
  }
}
