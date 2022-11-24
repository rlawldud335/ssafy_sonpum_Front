<!-- <template>
  <div>MyHouseProductReview</div>
</template> -->
<template>
  <div class="mypage-review-main">
    <div class="mypage-review-title">
      <span>내가 등록한 매물 Review</span>
    </div>
    <div
      class="mypage-review-contents"
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
.mypage-review-main {
  padding: 20px;
}

.mypage-review-title {
  display: flex;
  justify-content: space-between;
  margin: 10px;
  font-size: 1.1rem;
  font-weight: bold;
}

.mypage-review-content {
  padding: 50px;
}
</style>
