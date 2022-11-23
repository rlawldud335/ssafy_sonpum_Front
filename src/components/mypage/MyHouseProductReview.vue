<!-- <template>
  <div>MyHouseProductReview</div>
</template> -->
<template>
  <div class="myhouse-product-main">
    <div class="myhouse-product-title">
      <span>내가 등록한 매물 Review</span>
    </div>
    <div
      class="myhouse-product-contents"
      v-if="userReviews && userReviews.length != 0"
    >
      <user-house-product-review-item
        v-for="(review, index) in userReviews"
        :key="index"
        :review="review"
      ></user-house-product-review-item>
    </div>
    <div v-else>
      <v-col>작성한 Review가 없습니다.</v-col>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import UserHouseProductReviewItem from "../houseProduct/UserHouseProductReviewItem.vue";

const houseProductStore = "houseProductStore";
const memberStore = "memberStore";

export default {
  name: "MyHouseProductReview",
  components: {
    UserHouseProductReviewItem,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(houseProductStore, ["userReviews"]),
    ...mapState(memberStore, ["userInfo"]),
  },
  created() {
    if (this.userInfo.userId) this.getUserReview(this.userInfo.userId);
  },
  methods: {
    ...mapActions(houseProductStore, ["getUserReview"]),
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
