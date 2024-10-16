import { createStore } from 'vuex'

const API_ROOT = 'http://localhost:3000/api';

export default createStore({
  state: {
    token: localStorage.getItem('token') || '' as string,
    allMenus: [],
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
    },
    setAllMenus(state, menus) {
      state.allMenus = menus;
    },
  },
  actions: {
    async login({ commit }, user) {
      try{
        const res = await fetch(`${API_ROOT}/users/login/`, {
          method: 'post',
          headers: {'Content-Type': 'application/json',},
          body: JSON.stringify(user)
        });
        const data = await res.json();
        if(res.status!==200){
          console.error(data.message);
        } else {
          commit('setToken', data.token);
        }
      } catch(err) {
        console.error(err);
      }
    },
    async fetchAllMenus({ commit }) {
      try{
        const res = await fetch(`${API_ROOT}/menu`);
        const allMenus = await res.json();
        commit('setAllMenus', allMenus);
      } catch(err) {
        console.error(err);
      }
    },
    async createMenu({ commit }, { menu, token }) {
      try {
        const res = await fetch(`${API_ROOT}/menu/create`, {
          method: "post",
          headers: {'Content-Type': 'application/json', 'Authorization': `bearer ${token}`},
          body: JSON.stringify(menu)
        });
      } catch(err) {
        console.error(err);
      }
    },
  },
  getters: {
    token: (state) => state.token,
    allMenus: (state) => state.allMenus,
  },
  modules: {
  }
})
