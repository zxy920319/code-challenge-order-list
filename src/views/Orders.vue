<template>
  <v-row justify="center" align="center">
    <v-col cols="12" md="8" sm="10" class="pb-8">
      <order-list :currency="currency" @click:order="handleClick"></order-list>
    </v-col>
  </v-row>
</template>

<script>
import OrderList from "@/components/OrderList";
import mixin from "@/mixins";

export default {
  name: "Orders",

  mixins: [mixin],

  components: { OrderList },

  methods: {
    handleClick(order) {
      const location = {
        name: "OrderDetail"
      };
      location.params = { order };
      this.$router.push(location);
    }
  }
};
</script>
