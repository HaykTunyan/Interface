import endpoints from '~/common/endpoints'

export const state = () => ({
  blogsList: [],
  singleBlog: null,
})

export const getters = {
  blogsList: (state) => state.blogsList,
  singleBlog: (state) => state.singleBlog,
}

export const mutations = {
  set(state, value) {
    Object.entries(value).forEach(([key, data]) => {
      if (
        !Array.isArray(state[key]) &&
        state[key] &&
        typeof state[key] === 'object'
      ) {
        state[key] = {
          ...state[key],
          ...data,
        }
      } else {
        state[key] = data
      }
    })
  },
  setSingleBlog(state, blog) {
    state.singleBlog = blog
  },
}

export const actions = {
  async fetchBlogsList({ commit }) {
    const response = await this.$axios.get(endpoints.blog)
    commit('set', { blogsList: response.data })
  },

  async fetchSingleBlog({ commit }, id) {
    const response = await this.$axios.get(`${endpoints.blog}/${id}`)
    commit('setSingleBlog', response.data)
  },
}
