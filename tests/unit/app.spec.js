import Vue from 'vue';
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from "@vue/test-utils";
import App from "@/App.vue";

Vue.config.productionTip = false;

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(Vuetify)

let getters = {
  activeOrder: () => [{ "orderTime": "2019-07-15 16:44:06", "restaurantName": "Big Burger Joint", "orderTotal": "16.95", "deliveryAddress": "Streetname 1", "status": "In transit" }]
}

let actions = {
  getLast5Orders: jest.fn(),
}

let store = new Vuex.Store({
  state: {},
  actions,
  getters
})

let vuetify = new Vuetify()

let wrapper = null;
const makeWrapper = () => {
  wrapper = shallowMount(App, {
    store, vuetify, localVue
  });
};

afterEach(() => {
  if (!wrapper) return;
  wrapper = null;
});

describe("App", () => {
  it("has a mounted hook", () => {
    expect(typeof App.mounted).toBe("function");
  });

  it("should render application", () => {
    makeWrapper()
    expect(wrapper.classes()).toContain('order-list-container')
  });

  it("action should be automatically called when page loaded", async () => {
    makeWrapper()
    expect(actions.getLast5Orders).toHaveBeenCalled()
  });

  it("will not render the bottom sheet", () => {
    makeWrapper()
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.find('.prominent-bar').exists()).toBe(true)
  });

});
