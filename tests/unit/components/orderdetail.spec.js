import Vuetify from "vuetify";
import Vuex from "vuex";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import OrderDetail from "@/views/OrderDetail.vue";
import { GetOrderInfo } from "@/services";

jest.mock("@/services");

const mockData = {
  orderReference: "FVVAWO",
  customerId: 8481133476,
  orderTime: "2019-07-15 16:44:06",
  restaurantName: "Big Burger Joint",
  orderTotal: "16.95",
  deliveryCosts: "2.75",
  paymentMethod: "iDeal",
  deliveryAddress: "Streetname 1",
  status: {
    currentStatus: "In transit",
    history: [
      {
        status: "Food is being prepared",
        statusStart: "2019-07-15 16:49:45",
        statusEnd: "2019-07-15 16:59:54"
      },
      {
        status: "Order is accepted",
        statusStart: "2019-07-15 16:45:23",
        statusEnd: "2019-07-15 16:49:45"
      },
      {
        status: "Order is placed",
        statusStart: "2019-07-15 16:44:06",
        statusEnd: "2019-07-15 16:45:23"
      }
    ]
  },
  products: [
    {
      amount: 1,
      productName: "Cheeseburger with fries on the side",
      productDescription:
        "250gr beef burger with cheddar cheese. Topped with lettuce, tomato and unions.",
      pricePerUnitWithTax: "9.45"
    },
    {
      amount: 1,
      productName: "Big Mega Hotdog",
      productDescription:
        "(Mustard and ketchup) With bacon, pickels, union, cheddar and grilled hotdog.",
      pricePerUnitWithTax: "4.75"
    }
  ]
};
GetOrderInfo.mockResolvedValue(mockData);

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(Vuetify);

let mutation = {
  setProfile: state => (state.profile = {})
};

let store = new Vuex.Store({
  state: { profile: {} },
  mutation
});

let vuetify = new Vuetify();

jest.mock("moment", () => () => ({
  format: () => "2018–01–30T12:34:56+00:00"
}));

describe("OrderDetail", () => {
  const wrapper = shallowMount(OrderDetail, {
    store,
    vuetify,
    localVue,
    stubs: {
      "v-scale-transition": false
    }
  });

  test("GetOrderInfo will be called", () => {
    expect(GetOrderInfo.mock.calls.length).toBe(1);
  });

  it("should render", () => {
    wrapper.setData({ order: mockData });
    expect(wrapper.vm.order).toBeTruthy();
  });
});
