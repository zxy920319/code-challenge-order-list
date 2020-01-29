import Vue from "vue";
import VueRouter from "vue-router";
import OrderDetail from "@/views/OrderDetail.vue";
import Orders from "@/views/Orders.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Orders",
    component: Orders
  },
  {
    path: "/order-detail",
    name: "OrderDetail",
    component: OrderDetail
  }
];

const router = new VueRouter({
  routes
});

export default router;
