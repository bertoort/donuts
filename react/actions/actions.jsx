let id = 3;

export default {
  add (donut) {
    return { id: ++id, type: "ADD_DONUT", text: donut }
  },
  remove (id) {
    return {id, type: "REMOVE_DONUT"}
  },
  update (id, value) {
    return {id, text: value, type: "UPDATE_DONUT"}
  }
}
