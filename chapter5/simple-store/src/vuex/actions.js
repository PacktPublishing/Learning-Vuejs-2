import { CHANGE_MSG, INCREMENT_COUNTER } from './mutation_types'

export const changeMessage = ({ dispatch }, msg) => {
  dispatch(CHANGE_MSG, msg)
}

export const incrementCounter = ({ dispatch }) => {
  dispatch(INCREMENT_COUNTER)
}

/**
 * Handles changes in the message input
 *
 * @param dispatch
 * @param {string} msg the message to dispatch with CHANGE_MSG mutation
 * @param {boolean} increment if true, INCREMENT_COUNTER mutation should be called
 */
export const handleMessageInputChanges = ( { dispatch }, msg, increment ) => {
  dispatch(CHANGE_MSG, msg);
  if (increment) {
    dispatch(INCREMENT_COUNTER)
  }
}