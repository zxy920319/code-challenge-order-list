import Vuetify from "vuetify";
import Vuex from "vuex";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import UserProfile from "@/views/UserProfile.vue";
import { GetUserInfo } from "@/services";

jest.mock("@/services");
GetUserInfo.mockResolvedValue({});

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

describe("UserProfile", () => {
  it("should render class profile-container", () => {
    const wrapper = shallowMount(UserProfile, {
      store,
      vuetify,
      localVue
    });
    expect(wrapper.classes()).toContain("profile-container");
    // expect(wrapper.html()).toMatchSnapshot();
  });

  test("GetUserInfo will not be called if profile exists in central state", () => {
    expect(GetUserInfo.mock.calls.length).toBe(0);
  });
});
