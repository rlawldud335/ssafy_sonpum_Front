<template>
  <v-hover v-slot="{ hover }">
    <div
      class="myhouse-product-item"
      :style="{ opacity: hover ? '0.6' : '' }"
      @click="moveDetailPage()"
    >
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        style="border-radius: 20px 20px 0px 0px"
      ></v-img>
      <div class="myhouse-product-item-title">
        <!-- <div class="product-title-name">{{ product.addressId }}</div> -->
        <div class="product-title-name">{{ product.apartName }}</div>

        <v-icon
          color="blue darken-2"
          class="mr-3"
          @click="bookmark = !bookmark"
        >
          {{ bookmark ? "mdi-bookmark" : "mdi-bookmark-outline" }}
        </v-icon>
      </div>
      <div class="product-price">
        {{ product.dealType | dealType }} |
        {{ (parseInt(product.dealAmount.replace(",", "")) * 10000) | price }}원
      </div>
    </div>
  </v-hover>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

const houseProductStore = "houseProductStore";

export default {
  name: "UserHouseProductItem",
  props: {
    product: Object,
  },
  data() {
    return {
      bookmark: false,
    };
  },
  methods: {
    ...mapActions(houseProductStore, ["detailProduct"]),
    ...mapMutations(houseProductStore, ["CLEAR_PRODUCT_LIST"]),
    moveDetailPage() {
      this.detailProduct(this.product);
      this.$router.push({ name: "houseProductDetail" });
    },
  },
  mounted() {
    this.CLEAR_PRODUCT_LIST();
  },
  filters: {
    price(value) {
      if (!value) return value;
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    dealType(value) {
      if (value == "SALE") {
        return "매매";
      } else if (value == "YEAR") {
        return "전세";
      } else {
        return "월세";
      }
    },
  },
};
</script>

<style scoped>
.myhouse-product-item {
  width: 200px;
  margin: 10px;
  border-radius: 20px;
  height: fit-content;
  background-color: white;
  box-shadow: 0 5px 18px -7px rgb(138, 138, 138);
}

.myhouse-product-item-title {
  display: flex;
  justify-content: space-between;
}

.product-title-name {
  font-size: 1rem;
  padding: 10px;
  padding-left: 20px;
  font-weight: 500;
}

.product-price {
  font-size: 0.9rem;
  padding: 15px;
}
</style>
