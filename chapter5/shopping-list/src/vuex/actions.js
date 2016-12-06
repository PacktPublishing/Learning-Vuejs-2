import { CHANGE_TITLE } from './mutation_types'

export const changeTitle = ({ dispatch }, title, id) => {
  dispatch(CHANGE_TITLE, title, id)
}
