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
        <div class="product-title-name">ProductName</div>
        <v-icon color="blue darken-2" class="mr-3">
          mdi-bookmark-outline
        </v-icon>
      </div>
      <div class="product-price">거래유형 | 가격</div>
    </div>
  </v-hover>
</template>

<script>
import { mapActions } from "vuex";

const houseProductStore = "houseProductStore";

export default {
  name: "HouseProductItem",
  props: {
    product: Object,
  },
  methods: {
    ...mapActions(houseProductStore, ["detailProduct"]),
    moveDetailPage() {
      this.detailProduct(this.product);
      this.$router.push({ name: "houseProductDetail" });
    },
  },
};
</script>

<style>
.myhouse-product-item {
  width: 200px;
  margin: 10px;
  border-radius: 20px;
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
