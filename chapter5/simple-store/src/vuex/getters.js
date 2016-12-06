export default {
  getMessage(state) {
    return (state.message).trim()
  },
  getCounter(state) {
    return (state.counter)
  }
}