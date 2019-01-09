// initial state
const state = {
  modals: {
    registration: {
      isOpen: false
    },
    login: {
      isOpen: false
    }
  }
};

// getters

// actions
const actions = {
  toggleRegistrationModal: ({commit}, {isOpen = false}) => {
    commit('TOGGLE_REGISTRATION_FORM', isOpen)
  },
  toggleLoginModal: ({commit}, {isOpen = false}) => {
    commit('TOGGLE_LOGIN_FORM', isOpen)
  },
};


// mutations
const mutations = {
  TOGGLE_REGISTRATION_MODAL: (state, payload) => {
    state.modals.registration = payload.isOpen
  },
  TOGGLE_LOGIN_MODAL: (state, payload) => {
    state.modals.login = payload.isOpen
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
