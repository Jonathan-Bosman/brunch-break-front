import router from '@/router';
import { createStore } from 'vuex'

const API_ROOT = 'http://localhost:3000/api';

export default createStore({
  state: {
    token: localStorage.getItem('token') || '' as string,
    allUtilisateurs: [],
    allMenus: [],
    allPromotions: [],
    allReservations: [],
    allBlog: [],
    oneBlog: [],
    allCapacite: [],
    allHoraires: [],
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
    },
    setAllUtilisateurs(state, utilisateurs) {
      state.allUtilisateurs = utilisateurs;
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
    setAllBlog(state, blog) {
      state.allBlog = blog;
    },
    setOneBlog(state, blog) {
      state.oneBlog = blog;
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
        const res = await fetch(`${API_ROOT}/utilisateurs/login/`, {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
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
    async fetchAllUtilisateurs({ commit }, { token }) {
      try{
        const res = await fetch(`${API_ROOT}/utilisateurs`, {
          method: "get",
          headers: {'Content-Type': 'application/json', 'Authorization': `bearer ${token}`}
        });
        if (res.status === 403) {
          router.push('/');
          throw new Error('Forbidden');
        }
        if (!res.ok) {
          throw new Error(`Erreur: ${res.status}`);
        }
        const allUtilisateurs = await res.json();
        commit('setAllUtilisateurs', allUtilisateurs);
      } catch(err) {
        console.error(err);
      }
    },
    async createUtilisateur({ commit }, { utilisateur }) {
      try {
        const res = await fetch(`${API_ROOT}/utilisateurs/create`, {
          method: "put",
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(utilisateur)
        });
      } catch(err) {
        console.error(err);
      }
    },
    async createUtilisateurNewsletter({ commit }, { utilisateur }) {
      try {
        const res = await fetch(`${API_ROOT}/utilisateurs/newsletter`, {
          method: "put",
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(utilisateur)
        });
      } catch(err) {
        console.error(err);
      }
    },
    async updateUtilisateur({ commit }, { utilisateur, id, token }) {
      try {
        const res = await fetch(`${API_ROOT}/utilisateurs/update/${id}`, {
          method: "put",
          headers: {'Content-Type': 'application/json', 'Authorization': `bearer ${token}`},
          body: JSON.stringify(utilisateur)
        });
      } catch(err) {
        console.error(err);
      }
    },
    async deleteUtilisateur({ commit }, { id, token }) {
      try {
        const res = await fetch(`${API_ROOT}/utilisateurs/delete/${id}`, {
          method: "delete",
          headers: {'Content-Type': 'application/json', 'Authorization': `bearer ${token}`}
        });
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
    async updateMenu({ commit }, { menu, id, token }) {
      try {
        const res = await fetch(`${API_ROOT}/menu/update/${id}`, {
          method: "put",
          headers: {'Content-Type': 'application/json', 'Authorization': `bearer ${token}`},
          body: JSON.stringify(menu)
        });
      } catch(err) {
        console.error(err);
      }
    },
    async deleteMenu({ commit }, { id, token }) {
      try {
        const res = await fetch(`${API_ROOT}/menu/delete/${id}`, {
          method: "delete",
          headers: {'Content-Type': 'application/json', 'Authorization': `bearer ${token}`}
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
    async createPromotion({ commit }, { promotion, token }) {
      try {
        const res = await fetch(`${API_ROOT}/promotions/create`, {
          method: "post",
          headers: {'Content-Type': 'application/json', 'Authorization': `bearer ${token}`},
          body: JSON.stringify(promotion)
        });
      } catch(err) {
        console.error(err);
      }
    },
    async updatePromotion({ commit }, { promotion, id, token }) {
      try {
        const res = await fetch(`${API_ROOT}/promotions/update/${id}`, {
          method: "put",
          headers: {'Content-Type': 'application/json', 'Authorization': `bearer ${token}`},
          body: JSON.stringify(promotion)
        });
      } catch(err) {
        console.error(err);
      }
    },
    async deletePromotion({ commit }, { id, token }) {
      try {
        const res = await fetch(`${API_ROOT}/promotions/delete/${id}`, {
          method: "delete",
          headers: {'Content-Type': 'application/json', 'Authorization': `bearer ${token}`}
        });
      } catch(err) {
        console.error(err);
      }
    },
    async fetchAllBlog({ commit }) {
      try{
        const res = await fetch(`${API_ROOT}/blog`);
        const allBlog = await res.json();
        commit('setAllBlog', allBlog);
      } catch(err) {
        console.error(err);
      }
    },
    async fetchOneBlog({ commit }, { id }) {
      try{
        const res = await fetch(`${API_ROOT}/blog/${id}`);
        const oneBlog = await res.json();
        commit('setOneBlog', oneBlog);
      } catch(err) {
        console.error(err);
      }
    },
    async createBlog({ commit }, { blog, token }) {
      try {
        const res = await fetch(`${API_ROOT}/blog/create`, {
          method: "post",
          headers: {'Content-Type': 'application/json', 'Authorization': `bearer ${token}`},
          body: JSON.stringify(blog)
        });
      } catch(err) {
        console.error(err);
      }
    },
    async updateBlog({ commit }, { blog, id, token }) {
      try {
        const res = await fetch(`${API_ROOT}/blog/update/${id}`, {
          method: "put",
          headers: {'Content-Type': 'application/json', 'Authorization': `bearer ${token}`},
          body: JSON.stringify(blog)
        });
      } catch(err) {
        console.error(err);
      }
    },
    async deleteBlog({ commit }, { id, token }) {
      try {
        const res = await fetch(`${API_ROOT}/blog/delete/${id}`, {
          method: "delete",
          headers: {'Content-Type': 'application/json', 'Authorization': `bearer ${token}`}
        });
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
    async createReservation({ commit }, { reservation }) {
      try {
        const res = await fetch(`${API_ROOT}/reservations/create`, {
          method: "post",
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(reservation)
        });
      } catch(err) {
        console.error(err);
      }
    },
    async updateReservation({ commit }, { reservation, id, token }) {
      try {
        const res = await fetch(`${API_ROOT}/reservations/update/${id}`, {
          method: "put",
          headers: {'Content-Type': 'application/json', 'Authorization': `bearer ${token}`},
          body: JSON.stringify(reservation)
        });
      } catch(err) {
        console.error(err);
      }
    },
    async deleteReservation({ commit }, { id, token }) {
      try {
        const res = await fetch(`${API_ROOT}/reservations/delete/${id}`, {
          method: "delete",
          headers: {'Content-Type': 'application/json', 'Authorization': `bearer ${token}`}
        });
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
    async updateCapacite({ commit }, { capacite, token }) {
      try {
        const res = await fetch(`${API_ROOT}/reservations/capacites/update`, {
          method: "put",
          headers: {'Content-Type': 'application/json', 'Authorization': `bearer ${token}`},
          body: JSON.stringify(capacite)
        });
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
    async updateHoraires({ commit }, { horaires, id, token }) {
      try {
        const res = await fetch(`${API_ROOT}/reservations/update/horaires/${id}`, {
          method: "put",
          headers: {'Content-Type': 'application/json', 'Authorization': `bearer ${token}`},
          body: JSON.stringify(horaires)
        });
      } catch(err) {
        console.error(err);
      }
    },
  },
  getters: {
    token: (state) => state.token,
    allUtilisateurs: (state) => state.allUtilisateurs,
    allMenus: (state) => state.allMenus,
    allPromotions: (state) => state.allPromotions,
    allReservations: (state) => state.allReservations,
    allBlog: (state) => state.allBlog,
    oneBlog: (state) => state.oneBlog,
    allCapacite: (state) => state.allCapacite,
    allHoraires: (state) => state.allHoraires,
  },
  modules: {
  }
})
