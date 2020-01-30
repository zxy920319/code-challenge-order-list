import Vuetify from "vuetify";
import Vuex from "vuex";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import OrderDetail from "@/views/OrderDetail.vue";
import { GetOrderInfo } from "@/services";

jest.mock("@/services");
GetOrderInfo.mockResolvedValue({});

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

describe("OrderDetail", () => {
  it("should render class order-detail-constainer", () => {
    const wrapper = shallowMount(OrderDetail, {
      store,
      vuetify,
      localVue
    });
    expect(wrapper.classes()).toContain("order-detail-constainer");
  });

  test("GetOrderInfo will be called", () => {
    expect(GetOrderInfo.mock.calls.length).toBe(1);
  });
});
