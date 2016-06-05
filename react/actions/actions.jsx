let id = 3;

export default {
  add (todo) {
    return { id: ++id, type: "ADD_TODO", text: todo }
  },
  remove (id) {
    return {id, type: "REMOVE_TODO"}
  },
  update (id, value) {
    return {id, text: value, type: "UPDATE_TODO"}
  }
}
