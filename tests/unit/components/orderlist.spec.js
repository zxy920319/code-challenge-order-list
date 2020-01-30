import OrderList from "@/components/OrderList.vue";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import Vuetify from "vuetify";

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(Vuex);
localVue.use(Vuetify);

let vuetify = new Vuetify();
const mockData = [
  {
    orderTime: "2019-07-15 16:44:06",
    restaurantName: "Big Burger Joint",
    orderTotal: "16.95",
    deliveryAddress: "Streetname 1",
    status: "In transit"
  },
  {
    orderTime: "2019-07-07 17:33:00",
    restaurantName: "Crepes & Dutch Mini Pancakes",
    orderTotal: "24.35",
    deliveryAddress: "Bussinessstreet 420",
    status: "Delivered"
  },
  {
    orderTime: "2019-07-04 15:48:23",
    restaurantName: "Waffles + smoothies",
    orderTotal: "12.45",
    deliveryAddress: "Streetname 1",
    status: "Delivered"
  },
  {
    orderTime: "2019-06-19 16:55:16",
    restaurantName: "New Bali",
    orderTotal: "34.95",
    deliveryAddress: "Streetname 1",
    status: "Delivered"
  },
  {
    orderTime: "2019-06-01 11:33:36",
    restaurantName: "Substation",
    orderTotal: "12.45",
    deliveryAddress: "Streetname 1",
    status: "Delivered"
  },
  {
    orderTime: "2019-06-01 11:43:36",
    restaurantName: "Substation",
    orderTotal: "12.45",
    deliveryAddress: "Streetname 2",
    status: "Delivered"
  }
];
let getters = {
  orders: mockData => {
    if (mockData.last5Orders) {
      return Object.values(mockData.last5Orders.last5Orders);
    } else return [];
  }
};
let store = new Vuex.Store({
  getters
});

const routes = [
  {
    path: "/",
    name: "Orders"
  },
  {
    path: "/order-detail",
    name: "OrderList"
  }
];

const router = new VueRouter({
  routes
});

let wrapper = null;
const makeWrapper = () => {
  wrapper = shallowMount(OrderList, {
    propsData: {
      currency: "€"
    },
    router,
    store,
    vuetify,
    localVue
  });
};

describe("OrderList", () => {
  it("should have prop currency", () => {
    makeWrapper();
    expect(wrapper.vm.currency).toBe("€");
  });

  it("should have computed order and equal or less than 5", () => {
    expect(wrapper.html()).toMatchSnapshot();
    const localThis = { orders: mockData };
    expect(
      OrderList.computed.computedOrders.call(localThis).length
    ).toBeLessThanOrEqual(5);
  });
});
