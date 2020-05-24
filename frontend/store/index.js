export const strict = false

export const state = () => ({
  loggedIn: false
})

export const mutations = {
  setLogin (state, payload) {
    state.loggedIn = payload
  }
}

export const actions = {
  userLogin (context, payload) {
    context.commit('setLogin', payload)
  }
}
