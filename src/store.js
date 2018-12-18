import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(axios)
Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  state: {
    projects: null,
    posts: null,
    isLoading: false,
    baseUrl: 'https://verynathan.com/verynathan/wp-json/wp/v2/'
  },
  getters: {
    
  },
  mutations: {
    SET_PROJECTS (state, payload) {
      state.projects = payload;
    },
    SET_POSTS (state, payload) {
      state.posts = payload;
    },
    IS_LOADING (state, payload) {
      state.isLoading = payload;
    }
  },
  actions: {
    setProjects ({ commit, state }) {
      let uri = `${state.baseUrl}projects`;

      commit('IS_LOADING', true);

      axios.get(uri).then((response) => {
        commit('SET_PROJECTS', response.data);
      }).finally(commit('IS_LOADING', false));
    },
    setPosts ({ commit, state }) {
      let uri = `${state.baseUrl}posts?per_page=100`;

      commit('IS_LOADING', true);

      axios.get(uri).then((response) => {
        commit('SET_POSTS', response.data);
      }).finally(commit('IS_LOADING', false));
    }
  }
})

store.dispatch('setProjects');
store.dispatch('setPosts');


export default store
