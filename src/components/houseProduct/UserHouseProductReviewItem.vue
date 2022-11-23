<template>
  <v-hover v-slot="{ hover }">
    <div class="myhouse-product-item" :style="{ opacity: hover ? '0.6' : '' }">
      <div class="myhouse-product-item">
        <div>리뷰 번호 {{ review.houseProductReviewId }}</div>
        <div>매물번호 {{ review.houseProductId }}</div>
        <div>판매자 ID {{ review.userId }}</div>
        <div>별점 {{ review.rating }}</div>
        <div>내용 {{ review.content }}</div>
        <div>작성일자 {{ review.regtime }}</div>
      </div>
    </div>
  </v-hover>
</template>

<script>
export default {
  name: "UserHouseProductReviewItem",
  props: {
    review: Object,
  },
  data() {
    return {};
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
