import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(axios)
Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    projects: null,
    posts: null
  },
  getters: {

  },
  mutations: {
    setProjects (state, payload) {
      state.projects = payload;
    },
    setPosts (state, payload) {
      state.posts = payload;
    }
  },
  actions: {
    setProjects (context) {
      let uri = 'https://verynathan.com/verynathan/wp-json/wp/v2/projects';

      axios.get(uri).then((response) => {
        context.commit('setProjects', response.data);
      }).finally(this.isLoading = false);
    },
    setPosts (context) {
      let uri = 'https://verynathan.com/verynathan/wp-json/wp/v2/posts?per_page=100';
      
      axios.get(uri).then((response) => {
        context.commit('setPosts', response.data);
      }).finally(this.isLoading = false);
      }
    }
  })
