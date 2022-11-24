<template>
  <v-card>
    <v-card-title>
      <span class="headline">매물 등록</span>
      <v-spacer></v-spacer>
      <v-icon @click="closeRegisterDialog">mdi-close</v-icon>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-select
              class="mx-2"
              :items="sidoSelectList"
              item-text="sidoName"
              item-value="sidoCode"
              label="시도 선택"
              dense
              solo
              hide-details
              v-model="sidoCode"
              @change="getGugunList"
            ></v-select>
          </v-col>
          <v-col cols="12">
            <v-select
              class="mx-2"
              :items="gugunSelectList"
              item-text="gugunName"
              item-value="gugunCode"
              label="구군 선택"
              dense
              solo
              hide-details
              v-model="gugunCode"
              @change="getDongList"
            ></v-select>
          </v-col>
          <v-col cols="12">
            <v-select
              class="mx-2"
              :items="dongSelectList"
              item-text="dongName"
              item-value="dongCode"
              label="동 선택"
              dense
              solo
              hide-details
              v-model="dongCode"
              @change="getAddressList"
            ></v-select>
          </v-col>
          <v-col cols="12">
            <v-select
              class="mx-2"
              :items="addressSelectList"
              item-text="apartName"
              item-value="addressId"
              label="주소 선택"
              dense
              solo
              hide-details
              v-model="product.addressId"
            ></v-select>
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="층"
              v-model="product.floor"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="건설년도"
              v-model="product.buildYear"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="금액"
              v-model="product.dealAmount"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="면적"
              v-model="product.area"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-select
              class="mx-2"
              :items="dealTypeSelectList"
              item-text="dealTypeName"
              item-value="dealTypeVal"
              label="거래타입"
              dense
              solo
              hide-details
              v-model="product.dealType"
            ></v-select>
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="상세내용"
              v-model="product.content"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-file-input
              :rules="rules"
              accept="image/png, image/jpeg, image/bmp"
              placeholder="Pick an Images"
              prepend-icon="mdi-camera"
              label="Images"
            ></v-file-input>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" text @click="closeRegisterDialog"
        >등록하기</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
import { sidoList, gugunList, dongList, addressList } from "@/api/house";

export default {
  name: "HouseProductRegister",
  data() {
    return {
      sidoCode: null,
      gugunCode: null,
      dongCode: null,
      sidoSelectList: [],
      gugunSelectList: [],
      dongSelectList: [],
      addressSelectList: [],
      dealTypeSelectList: [
        { dealTypeName: "매매", dealTypeVal: "SALE" },
        { dealTypeName: "전세", dealTypeVal: "YEAR" },
        { dealTypeName: "월세", dealTypeVal: "MONTH" },
      ],
      product: {
        userId: null,
        floor: null,
        addressId: null,
        buildYear: null,
        dealAmount: null,
        area: null,
        dealType: null,
        content: null,
        files: null,
      },
      rules: [
        (value) =>
          !value ||
          value.size < 2000000 ||
          "Image size should be less than 2 MB!",
      ],
    };
  },
  props: [],
  computed: {},
  created() {
    sidoList(
      ({ data }) => {
        this.sidoSelectList = data;
      },
      () => {
        console.log("apiSidoList Fail");
      }
    );
  },
  methods: {
    closeRegisterDialog() {
      this.$emit("close-register-dialog");
    },
    getGugunList() {
      console.log("getGugunList", this.sidoCode);
      if (this.sidoCode) {
        gugunList(
          { sidoCode: this.sidoCode },
          ({ data }) => {
            this.gugunSelectList = data;
          },
          () => {
            console.log("apiGugunList Fail");
          }
        );
      }
    },
    getDongList() {
      if (this.gugunCode) {
        dongList(
          { gugunCode: this.gugunCode },
          ({ data }) => {
            this.dongSelectList = data;
          },
          () => {
            console.log("apiDongList Fail");
          }
        );
      }
    },
    getAddressList() {
      if (this.dongCode) {
        console.log("getAddressList", this.dongCode);
        addressList(
          this.dongCode,
          ({ data }) => {
            this.addressSelectList = data;
          },
          () => {
            console.log("addressList Fail");
          }
        );
      }
    },
  },
};
</script>
