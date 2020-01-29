<template>
  <v-scale-transition>
    <v-sheet>
      <v-row v-if="order" justify="center" align="center">
        <v-col cols="12" md="8" sm="10">
          <v-timeline
            v-for="(item, index) in order.status.history"
            :key="index"
          >
            <v-timeline-item color="primary lighten-2" fill-dot right>
              <v-card>
                <v-card-title class="primary lighten-2">
                  <v-icon dark size="42" class="mr-4">
                    mdi-magnify
                  </v-icon>
                  <h2 class="display-1 white--text font-weight-light">
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
    </v-sheet>
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
