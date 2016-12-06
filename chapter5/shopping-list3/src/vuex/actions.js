import { CHANGE_TITLE } from './mutation_types'

export default {
  changeTitle: ({ commit }, data) => {
    commit(CHANGE_TITLE, data)
  }
}
