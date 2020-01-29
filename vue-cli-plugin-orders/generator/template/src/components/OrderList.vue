<template>
  <div v-if="computedOrders" class="orders-wrapper">
    <v-card
      v-for="(order, index) in computedOrders"
      :key="index"
      @click="() => $emit('click:order', order)"
    >
      <v-card-text>
        <div>{{ order.orderTime }}</div>
        <p class="display-1 text--primary">
          {{ order.restaurantName }}
        </p>
        <p>{{ order.status }}</p>
        <div class="text--primary">
          {{ order.deliveryAddress }}
        </div>
      </v-card-text>
      <v-card-actions>
        <div class="font-weight-black">
          {{ `${order.orderTotal} ${currency}` }}
        </div>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    currency: {
      required: true,
      type: String
    }
  },
  computed: {
    ...mapGetters(["orders"]),
    computedOrders() {
      let result = this.orders;
      <% if (orderNumber) { %>
      const orderNumber = <%= orderNumber %>;
      <% } else { _%>
        const orderNumber = 5;
      <%_ } _%>
      if(this.orders.length > orderNumber) {
        result = this.orders.slice(0, orderNumber);
      }
      return result;
    }
  }
};
</script>
