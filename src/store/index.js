import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const set = property => (state, payload) => (state[property] = payload);

// const toggle = property => state => (state[property] = !state[property]);

export default new Vuex.Store({
  state: {
    profile: null
  },
  mutations: {
    setProfile: set("profile")
  },
  actions: {},
  modules: {}
});
