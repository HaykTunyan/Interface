import endpoints from '~/common/endpoints'

export const state = () => ({
  projectsList: [],
  projectFilters: [],
  singleProject: null,
})

export const getters = {
  projectsList: (state) => state.projectsList,
  projectFilters: (state) => state.projectFilters,
  singleProject: (state) => state.singleProject,
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
  setSingleProject(state, project) {
    state.singleProject = project
  },
}

export const actions = {
  async fetchProjectsList({ commit }) {
    const response = await this.$axios.get(endpoints.project)
    commit('set', { projectsList: response.data })
  },

  async fetchProjectFilters({ commit }) {
    const response = await this.$axios.get(endpoints.projectFilters)
    commit('set', { projectFilters: response.data })
  },

  async fetchSingleProject({ commit }, id) {
    const response = await this.$axios.get(`${endpoints.project}/${id}`)
    commit('setSingleProject', response.data)
  },
}
