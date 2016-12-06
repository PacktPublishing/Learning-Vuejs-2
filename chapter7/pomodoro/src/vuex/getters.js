//getters.js
export function isStarted(state) {
  return state.started
}
export function isPaused(state) {
  return state.paused
}
export function isStopped(state) {
  return state.stopped
}
export function getMinutes(state) {
  return Math.floor(state.counter / 60)
}
export function getSeconds(state) {
  return state.counter % 60
}
export function isWorking(state) {
  return state.isWorking
}
export function getTimestamp(state) {
  return state.timestamp
}
export function isSoundEnabled(state) {
  return state.soundEnabled
}
