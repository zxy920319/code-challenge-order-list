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
  state: {
    profile: {
      customerId: 8481133476,
      firstName: "John",
      lastName: "Doe",
      gender: "Male",
      language: "en",
      currency: "euro",
      emailAddress: "john.doe@example.com",
      birthday: "1988-07-02",
      address: "8923 Mockingbird Hill",
      registered: { date: "2015-11-04T22:09:36Z", age: 3 },
      picture: {
        large: "https://randomuser.me/api/portraits/men/81.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/81.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/81.jpg"
      }
    }
  },
  mutation
});

let vuetify = new Vuetify();

jest.mock("moment", () => () => ({
  format: () => "2018–01–30T12:34:56+00:00"
}));

describe("UserProfile", () => {
  it("should render class profile-container", () => {
    const wrapper = shallowMount(UserProfile, {
      store,
      vuetify,
      localVue,
      computed: {
        dob() {
          return "date";
        }
      }
    });
    expect(wrapper.classes()).toContain("profile-container");
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("GetUserInfo will not be called if profile exists in central state", () => {
    expect(GetUserInfo.mock.calls.length).toBe(0);
  });
});
