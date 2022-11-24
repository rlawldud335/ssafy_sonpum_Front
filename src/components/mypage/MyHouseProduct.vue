<template>
  <div class="myhouse-product-main">
    <div class="myhouse-product-title">
      <span>내가 등록한 매물</span>
      <v-dialog v-model="registerDialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="primary" v-bind="attrs" v-on="on">매물 등록하기</v-btn>
        </template>
        <house-product-register
          v-on:close-register-dialog="closeRegisterDialog"
        ></house-product-register>
      </v-dialog>
    </div>

    <div
      class="myhouse-product-contents"
      v-if="userProducts && userProducts.length != 0"
    >
      <user-house-product-item
        v-for="(product, index) in userProducts"
        :key="index"
        :product="product"
      ></user-house-product-item>
    </div>
    <div v-else>
      <v-col>거래내역이 없습니다.</v-col>
    </div>
  </div>
</template>

<script>
import HouseProductRegister from "@/components/houseProduct/HouseProductRegister.vue";
import UserHouseProductItem from "../houseProduct/UserHouseProductItem.vue";
import { mapActions, mapState } from "vuex";

const houseProductStore = "houseProductStore";
const memberStore = "memberStore";

export default {
  name: "MyHouseProduct",
  components: {
    UserHouseProductItem,
    HouseProductRegister,
  },
  data() {
    return {
      registerDialog: false,
    };
  },
  computed: {
    ...mapState(houseProductStore, ["userProducts"]),
    ...mapState(memberStore, ["userInfo"]),
  },
  created() {
    if (this.userInfo.userId) this.getUserProduct(this.userInfo.userId);
  },
  methods: {
    ...mapActions(houseProductStore, ["getUserProduct"]),
    closeRegisterDialog() {
      this.registerDialog = false;
    },
  },
};
</script>

<style>
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
