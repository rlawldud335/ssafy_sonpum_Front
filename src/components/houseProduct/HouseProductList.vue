<template>
    <v-expansion-panels v-if="products && products.length != 0">
        <house-product-item v-for="(product, index) in products" :key="index" :product="product" />
    </v-expansion-panels>
    <v-expansion-panels v-else>
        <v-col>거래내역이 없습니다.</v-col>
    </v-expansion-panels>
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
