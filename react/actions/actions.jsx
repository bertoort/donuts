import $ from 'jquery'

export default {
  remove (donutId, rowId) {
    return {donutId, rowId, type: "REMOVE_DONUT"}
  },
  undo () {
    return {type: "UNDO_MOVE"}
  },
  submit () {
    return {type: "SUBMIT_TURN"}
    // return function (dispatch) {
    //   return $.ajax({
    //     url: '/best-move',
    //     type: 'POST',
    //     contentType: 'application/json; charset=utf-8',
    //     data: JSON.stringify(game)
    //   })
    //     .done(data => dispatch())
    // }
  },
  computerMove (game) {

  },
  loading () {
    return {type: "DISPLAY_LOADING"}
  },
  switchMode () {
    return {type: "SWITCH_MODE"}
  },
  fetchDonuts(rows) {
    return function (dispatch) {
      return $.get(`/random-board?rows=${rows}`)
        .done(data => dispatch({data, type: "LOAD_DONUTS"}))
    }
  }
}
