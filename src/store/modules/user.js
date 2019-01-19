// import { getToken, setToken, removeToken } from '@/utils/auth'
import {login} from '@/api/user';
import { Notification } from 'element-ui';

// initial state
const state = {
  token: '',
  name: 'Unknown',
  connected: false,
  login_request: {
    requesting: false,
    error: null
  },
  data: null
};

// getters

// actions
const actions = {
  login: async ({commit}, payload) => {
    commit("LOGIN_REQUEST_START");
    try {
      const response = await login(payload);
      // eslint-disable-next-line
      console.log(response);
      commit("LOGIN_REQUEST_SUCCESS", response.data);
    } catch (e) {
      commit("LOGIN_REQUEST_ERROR", e);
      Notification.error({
        title: 'Log in error',
        message: e.toString()
      });
    }
  },
  logout: ({commit}) => {
    commit("LOGOUT");
  }
};

// mutations
const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles;
  },
  LOGIN_REQUEST_ERROR: (state, error) => {
    state.login_request.requesting = false;
    state.login_request.error = error;
  },
  LOGIN_REQUEST_START: state => {
    state.login_request.requesting = true;
  },
  LOGIN_REQUEST_SUCCESS: (state, data) => {
    state.login_request.requesting = false;
    state.login_request.error = null;
    state.connected = true;
    state.token = data.token;
    state.data = data.user;
    state.name = data.user.name;
  },
  LOGOUT: (state) => {
    state.token = '';
    state.name = 'Unknown';
    state.connected = false;
    state.data = null;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
