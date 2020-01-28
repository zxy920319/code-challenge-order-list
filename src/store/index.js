import Vue from "vue";
import Vuex from "vuex";
import { GetLastOrders } from "@/services";

Vue.use(Vuex);

const set = property => (state, payload) => (state[property] = payload);

// const toggle = property => state => (state[property] = !state[property]);

export default new Vuex.Store({
  state: {
    profile: null,
    orders: {}
  },
  mutations: {
    setProfile: set("profile"),
    setOrders: set("orders")
  },
  actions: {
    async getLast5Orders({ commit }) {
      commit("setOrders", await GetLastOrders());
    }
  },
  modules: {}
});
