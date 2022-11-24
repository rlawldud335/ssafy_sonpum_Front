<template>
  <div class="house-product-content" v-if="products && products.length != 0">
    <house-product-item
      v-for="(product, index) in products"
      :key="index"
      :product="product"
    />
  </div>
  <div v-else>
    <v-col>해당 지역에 매물이 없습니다.</v-col>
  </div>
</template>

<script>
import HouseProductItem from "@/components/houseProduct/HouseProductItem.vue";
import { mapState } from "vuex";

const houseProductStore = "houseProductStore";

export default {
  name: "HouseProductList",
  components: {
    HouseProductItem,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(houseProductStore, ["products"]),
  },
};
</script>

<style>
.house-deal-content {
  display: flex;
  flex-wrap: wrap;
  height: 100%;
}

.house-product-content {
  display: flex;
  flex-wrap: wrap;
}
</style>
