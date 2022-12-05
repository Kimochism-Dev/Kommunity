import { getterTree, mutationTree, actionTree } from 'typed-vuex'

export const state = () => ({
  columns: [
    [] as any,
    [] as any,
    [] as any,
    [] as any,
    [] as any,
    [] as any,
    [] as any
  ],
  tags: [],
  showTags: false
})

export const getters = getterTree(state, {
  columns: state => state.columns,
  tags: state => state.tags,
  showTags: state => state.showTags
})

export const mutations = mutationTree(state, {
  SET_COLUMNS: (state, data: any): void => {
    let isSeven = 0

    for (let i = 0; i <= data.length; i++) {
      if (data[i]) {
        state.columns[isSeven].push(data[i])
        isSeven++
        if (isSeven === 7) {
          isSeven = 0
        }
      }
    }
  },
  SET_COLUMNS_TAGS: (state, data: any): void => {
    state.columns = [[], [], [], [], [], [], []]
    mutations.SET_COLUMNS(state, data)
  },
  SET_TAGS: (state, tags): void => {
    state.tags = tags
  },
  SET_SHOW_TAGS: (state, showTags): void => {
    state.showTags = showTags
  }
})

export const actions = actionTree(
  { state, getters, mutations },
  {}
)
