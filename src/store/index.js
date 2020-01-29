import Vue from "vue";
import Vuex from "vuex";
import { GetLastOrders } from "@/services";

Vue.use(Vuex);

const set = property => (state, payload) => (state[property] = payload);

// const toggle = property => state => (state[property] = !state[property]);

export default new Vuex.Store({
  state: {
    profile: null,
    last5Orders: null
  },
  getters: {
    orders: state => {
      if (state.last5Orders) {
        return Object.values(state.last5Orders.last5Orders);
      } else return [];
    },
    activeOrder: state => {
      if (state.last5Orders) {
        return Object.values(state.last5Orders.last5Orders).filter(
          order => order.status === "In transit"
        );
      } else return [];
    }
  },
  mutations: {
    setProfile: set("profile"),
    setLast5Orders: set("last5Orders")
  },
  actions: {
    async getLast5Orders({ commit }) {
      commit("setLast5Orders", await GetLastOrders());
    }
  },
  modules: {}
});
