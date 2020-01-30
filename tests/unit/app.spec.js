import App from "@/App.vue";
import { mount } from "@vue/test-utils";

describe("App", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(App);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it("has a mounted hook", () => {
    expect(typeof App.mounted).toBe("function");
  });

  it("has an array of active order", () => {
    expect(typeof App.activeOrder).toBe("array");
  });
});
