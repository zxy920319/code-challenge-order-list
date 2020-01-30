import Vue from "vue";
import OrderList from "@/components/OrderList.vue";

function getRenderedText(Component, propsData) {
  const Constructor = Vue.extend(Component);
  const vm = new Constructor({ propsData: propsData }).$mount();
  return vm.$el.textContent;
}

describe("OrderList", () => {
  it("renders correctly with different props", () => {
    expect(
      getRenderedText(OrderList, {
        msg: "euro"
      })
    ).toBe("Hello");

    expect(
      getRenderedText(OrderList, {
        msg: "Bye"
      })
    ).toBe("Bye");
  });
});
