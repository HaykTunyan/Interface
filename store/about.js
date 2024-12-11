import endpoints from '~/common/endpoints'

export const state = () => ({
  about: [],
  team: [],
})

export const getters = {
  about: (state) => state.about,
  team: (state) => state.team,
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
}

export const actions = {
  async fetchAbout({ commit }) {
    const response = await this.$axios.get(endpoints.about)
    commit('set', { about: response.data })
  },
  async fetchTeam({ commit }) {
    const response = await this.$axios.get(endpoints.team)
    commit('set', { team: response.data })
  },
  async sendEmail(_, data) {
    return await this.$axios.post(endpoints.email, data)
  },
}
