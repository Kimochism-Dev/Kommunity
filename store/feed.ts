import { getterTree, mutationTree, actionTree } from 'typed-vuex'

export const state = () => ({
  posts: [],
  tags: [],
  showTags: false
})

export const getters = getterTree(state, {
  posts: state => state.posts,
  tags: state => state.tags,
  showTags: state => state.showTags
})

export const mutations = mutationTree(state, {
  SET_POSTS: (state, posts): void => {
    state.posts = posts
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
