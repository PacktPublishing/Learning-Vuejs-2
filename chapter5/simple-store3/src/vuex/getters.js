export default {
  getMessage(state) {
    return (state.msg).toUpperCase()
  },
  getCounter(state) {
    return (state.counter)
  }
}

