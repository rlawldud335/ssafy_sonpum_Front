<template>
  <div class="myhouse-product-item">
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      style="border-radius: 20px 20px 0px 0px"
      @click="moveDetailPage()"
    ></v-img>
    <div class="myhouse-product-item-title">
      <div
        class="product-title-name"
        style="padding: 15px; padding-bottom: 0px"
        @click="moveDetailPage()"
      >
        {{ product.apartName }}
      </div>
      <v-icon
        style="padding-top: 15px"
        color="blue darken-2"
        class="mr-3"
        @click="bookmark = !bookmark"
      >
        {{ bookmark ? "mdi-bookmark" : "mdi-bookmark-outline" }}
      </v-icon>
    </div>
    <div style="padding: 15px" class="product-price" @click="moveDetailPage()">
      {{ product.dealType | dealType }} |
      {{ product.dealAmount | dealAmount }}
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

const houseProductStore = "houseProductStore";

export default {
  name: "HouseProductItem",
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
    moveDetailPage() {
      this.detailProduct(this.product);
      this.$router.push({ name: "houseProductDetail" });
    },
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
  font-weight: 500;
  padding: 0;
}

.product-price {
  font-size: 0.9rem;
  padding: 0;
}
</style>
