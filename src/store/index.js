import Vue from "vue";
import Vuex from "vuex";
import { GetLastOrders } from "@/services";

Vue.use(Vuex);

const set = property => (state, payload) => (state[property] = payload);

// const toggle = property => state => (state[property] = !state[property]);

export default new Vuex.Store({
  state: {
    profile: null,
    last5Orders: {}
  },
  getters: {
    orders: state => {
      return Object.values(state.orders.last5Orders);
    }
  },
  mutations: {
    setProfile: set("profile"),
    setLast5Orders: set("last5Orders")
  },
  actions: {
    async getLast5Orders({ commit }) {
      commit("last5Orders", await GetLastOrders());
    }
  },
  modules: {}
});
