import { createStore } from 'vuex'

const API_ROOT = 'http://localhost:3000/api';

export default createStore({
  state: {
    token: localStorage.getItem('token') || '' as string,
    allMenus: [],
    allPromotions: [],
    allReservations: [],
    allCapacite: [],
    allHoraires: [],
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
    },
    setAllMenus(state, menus) {
      state.allMenus = menus;
    },
    setAllPromotions(state, promotions) {
      state.allPromotions = promotions;
    },
    setAllReservations(state, reservations) {
      state.allReservations = reservations;
    },
    setAllCapacite(state, capacite) {
      state.allCapacite = capacite;
    },
    setAllHoraires(state, horaires) {
      state.allHoraires = horaires;
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
    async fetchAllPromotions({ commit }) {
      try{
        const res = await fetch(`${API_ROOT}/promotions`);
        const allPromotions = await res.json();
        commit('setAllPromotions', allPromotions);
      } catch(err) {
        console.error(err);
      }
    },
    async fetchAllReservations({ commit }) {
      try{
        const res = await fetch(`${API_ROOT}/reservations`);
        const allReservations = await res.json();
        commit('setAllReservations', allReservations);
      } catch(err) {
        console.error(err);
      }
    },
    async fetchAllCapacite({ commit }) {
      try{
        const res = await fetch(`${API_ROOT}/reservations/capacite`);
        const allCapacite = await res.json();
        commit('setAllCapacite', allCapacite);
      } catch(err) {
        console.error(err);
      }
    },
    async fetchAllHoraires({ commit }) {
      try{
        const res = await fetch(`${API_ROOT}/reservations/horaires`);
        const allHoraires = await res.json();
        commit('setAllHoraires', allHoraires);
      } catch(err) {
        console.error(err);
      }
    },
  },
  getters: {
    token: (state) => state.token,
    allMenus: (state) => state.allMenus,
    allPromotions: (state) => state.allPromotions,
    allReservations: (state) => state.allReservations,
    allCapacite: (state) => state.allCapacite,
    allHoraires: (state) => state.allHoraires,
  },
  modules: {
  }
})
