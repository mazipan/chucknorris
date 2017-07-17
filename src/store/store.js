import api from 'src/api'

export const state = {
  isShowSidebar: false,
  loading: false,
  categories: [],
  randomJokes: {},
  randomJokesByCategory: {},
  searchResultJokes: {}
}

export const getters = {
  isShowSidebar: (state) => {
    return state.isShowSidebar
  },
  isLoading: (state) => {
    return state.loading
  },
  categories: (state) => {
    return state.categories
  },
  randomJokes: (state) => {
    return state.randomJokes
  },
  randomJokesByCategory: (state) => {
    return state.randomJokesByCategory
  },
  searchResultJokes: (state) => {
    return state.searchResultJokes
  }
}

export const mutations = {
  setShowSidebar (state, value) {
    state.isShowSidebar = value
  },
  setLoading (state, value) {
    state.loading = value
  },
  setCategories (state, value) {
    state.categories = value
  },
  setRandomJokes (state, value) {
    state.randomJokes = value
  },
  setRandomJokesByCategory (state, value) {
    state.randomJokesByCategory = value
  },
  setSearchResultJokes (state, value) {
    state.searchResultJokes = value
  }
}

export const actions = {
  getRandomJokes ({commit}) {
    commit('setLoading', true)
    api.getRandomJokes((response) => {
      commit('setLoading', false)    
      commit('setRandomJokes', response.body)
    }, () => {
      commit('setLoading', false)
    }, null)
  },
  getRandomJokesByCategory ({commit}, category) {
    commit('setLoading', true)
    api.getRandomJokesByCategory((response) => {
      commit('setLoading', false)
      commit('setRandomJokesByCategory', response.body)
    }, () => {
      commit('setLoading', false)
    }, category)
  },
  getCategories ({commit}) {
    commit('setLoading', true)
    api.getCategories((response) => {
      commit('setLoading', false)
      commit('setCategories', response.body)
    }, () => {
      commit('setLoading', false)
    }, null)
  },
  searchJokes ({commit}, keyword) {
    commit('setLoading', true)
    api.searchJokes((response) => {
      commit('setLoading', false)
      commit('setSearchResultJokes', response.body)
    }, () => {
      commit('setLoading', false)
    }, keyword)
  }
}


