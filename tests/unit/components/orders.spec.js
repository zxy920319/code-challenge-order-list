import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import Orders from "@/views/Orders.vue";
import OrderList from "@/components/OrderList.vue";
import Vuetify from "vuetify";

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(Vuex);
localVue.use(Vuetify);

let vuetify = new Vuetify();
let store = new Vuex.Store({
  state: { profile: { currency: "yen" } }
});

const routes = [
  {
    path: "/",
    name: "Orders",
    component: Orders
  },
  {
    path: "/order-detail",
    name: "OrderDetail"
    // component: Component
  }
];

const router = new VueRouter({
  routes
});

describe("Orders", () => {
  it("should render class profile-container", () => {
    const wrapper = shallowMount(Orders, {
      router,
      store,
      vuetify,
      localVue
    });
    wrapper.find(OrderList).vm.$emit("click:order");
    expect(wrapper.vm.$route.path).toBe(routes[1].path);
  });

  it("should render class profile-container", () => {
    const wrapper = shallowMount(Orders, {
      router,
      store,
      vuetify,
      localVue
    });
    expect(wrapper.vm.currency).toBe("¥");
  });
});
