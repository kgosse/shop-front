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
    commit('TOGGLE_REGISTRATION_MODAL', isOpen)
  },
  toggleLoginModal: ({commit}, {isOpen = false}) => {
    commit('TOGGLE_LOGIN_MODAL', isOpen)
  },
};


// mutations
const mutations = {
  TOGGLE_REGISTRATION_MODAL: (state, payload) => {
    state.modals.registration.isOpen = payload
  },
  TOGGLE_LOGIN_MODAL: (state, payload) => {
    state.modals.login.isOpen = payload;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
