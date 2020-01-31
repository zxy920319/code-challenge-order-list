<template>
  <v-row
    v-if="computedOrders"
    class="text-left"
    :justify="$vuetify.breakpoint.xsOnly ? 'center' : 'start'"
    align="center"
  >
    <v-col
      cols="10"
      md="6"
      sm="8"
      xs="10"
      v-for="(order, index) in computedOrders"
      :key="index"
    >
      <v-card class="pa-2" height="230">
        <v-card-text>
          <div v-text="time(order.orderTime)"></div>
          <p class="title text--primary">
            {{ order.restaurantName }}
          </p>
          <p :class="{ 'info--text': order.status === 'In transit' }">
            {{ order.status }}
          </p>
          <div class="subtitle-2 font-weight-black">
            {{ `${order.orderTotal} ${currency}` }}
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="primary"
            text
            @click="() => $emit('click:order', order)"
          >
            {{ $vuetify.lang.t("$vuetify.order.detail") }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";
import * as moment from "moment";
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
      if (!this.orders) return [];
      let result = this.orders;
      <% if (orderNumber) { %>
      const orderNumber = <%= orderNumber %>;
      <% } else { _%>
        const orderNumber = 5;
      <%_ } _%>
      if (this.orders.length > orderNumber) {
        result = this.orders.slice(0, orderNumber);
      }
      return result;
    }
  },

  methods: {
    time(orderTime) {
      if (!orderTime) return "";
      return moment(orderTime).format("Do MMMM YYYY, h:mm:ss a");
    },
  }
};
</script>
