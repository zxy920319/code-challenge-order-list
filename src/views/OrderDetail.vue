<template>
  <v-scale-transition>
    <v-row
      v-if="order"
      justify="center"
      align="center"
      class="order-detail-constainer"
    >
      <v-col cols="10" sm="8">
        <v-card dark color="tertiary">
          <v-card-title class="headline">
            {{ order.status.currentStatus }}
          </v-card-title>

          <v-card-text class="order-info">
            <div>
              <div class="subtitle-2">Order Time</div>
              <p class="body-2">
                {{ formatTime(order.orderTime) }}
              </p>
            </div>
            <div>
              <div class="subtitle-2">Restaurant Name</div>
              <p class="body-2">
                {{ order.restaurantName }}
              </p>
            </div>
            <div>
              <div class="subtitle-2">Order Total</div>
              <p class="body-2">
                {{ order.orderTotal }}
              </p>
            </div>
            <div>
              <div class="subtitle-2">Delivery Costs</div>
              <p class="body-2">
                {{ order.deliveryCosts }}
              </p>
            </div>
            <div>
              <div class="subtitle-2">Payment Method</div>
              <p class="body-1">
                {{ order.paymentMethod }}
              </p>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="10" sm="8">
        <v-row class="ma-0 flex-wrap">
          <v-card
            v-for="(item, index) in order.products"
            :key="index"
            class="food-info"
            outlined
          >
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">NUMBER: {{ item.amount }}</div>
                <v-list-item-title class="title mb-1">
                  {{ item.productName }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ item.productDescription }}
                </v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar tile size="80">
                <img :src="require('@/assets/img/food.png')" alt="John" />
              </v-list-item-avatar>
            </v-list-item>
          </v-card>
        </v-row>
      </v-col>
      <v-col cols="10" sm="8" class="mb-8">
        <v-timeline v-for="(item, index) in order.status.history" :key="index">
          <v-timeline-item
            color="primary lighten-2"
            fill-dot
            :right="Boolean(index % 2)"
            :left="!Boolean(index % 2)"
          >
            <v-card>
              <v-card-title class="primary lighten-2">
                <v-icon dark size="42" class="mr-4">
                  mdi-magnify
                </v-icon>
                <h2 class="headline white--text font-weight-light">
                  {{ item.status }}
                </h2>
              </v-card-title>
              <v-container>
                <v-row>
                  <v-col cols="12" md="10">
                    {{ formatTime(item.statusStart) }}
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-scale-transition>
</template>

<script>
import { GetOrderInfo } from "@/services";
import * as moment from "moment";

export default {
  name: "OrderDetail",

  data: () => ({
    order: null
  }),

  mounted() {
    this.getOrderInfo();
  },

  methods: {
    async getOrderInfo() {
      this.order = await GetOrderInfo();
    },

    formatTime(time) {
      if (!time) return "";
      return moment(time).format("h:mm:ss a, Do MMMM YYYY");
    }
  }
};
</script>
