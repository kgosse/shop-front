// import Cookies from 'js-cookie'

let Cookies = {};
Cookies.set = (k, v) => localStorage.setItem(k, v);
Cookies.get = k => localStorage.getItem(k);
Cookies.remove = k => localStorage.removeItem(k);

const app = {
  state: {
    sidebar: {
      opened: !+Cookies.get('sidebarStatus'),
      withoutAnimation: false
    },
    modals: {
      registration: false,
    },
    device: 'desktop'
  },
  mutations: {
    TOGGLE_REGISTRATION_FORM: (state, payload) => {
      state.modals.registration = payload
    },
  },
  actions: {
    toggleRegistrationForm: ({commit}, val = false) => {
      commit('TOGGLE_REGISTRATION_FORM', val)
    },
    ToggleSideBar: ({ commit }) => {
      commit('TOGGLE_SIDEBAR')
    },
    CloseSideBar({ commit }, { withoutAnimation }) {
      commit('CLOSE_SIDEBAR', withoutAnimation)
    },
    ToggleDevice({ commit }, device) {
      commit('TOGGLE_DEVICE', device)
    }
  }
}

export default app
