<template>
  <div class="house-product-review-main">
    <div class="house-product-review-register">
      <div style="display: flex; flex-direction: row; align-items: center">
        <v-avatar size="36" color="pink">
          <v-icon dark> mdi-account-circle </v-icon>
        </v-avatar>
        <p style="font-size: 1rem; margin: 0; margin-left: 10px">{{ userInfo.userId }}</p>
        <div>
          <v-rating
            v-model="review.rating"
            background-color="orange lighten-3"
            color="orange"
            large
          ></v-rating>
        </div>
      </div>
      <v-text-field
        append-outer-icon="mdi-send"
        filled
        clear-icon="mdi-close-circle"
        clearable
        label="Review"
        type="text"
        v-model="review.content"
        @keyup.enter = "writeReview"
      ></v-text-field>
    </div>
    <!-- <div>리뷰리스트입니다</div> -->
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

const memberStore = "memberStore";
const houseProductStore = "houseProductStore";

export default {
  data() {
    return {
      review: {
        houseProductId: null, 
        userId: null,
        content: null,
        rating: null,
        image: "",
      },
    };
  },
  computed: {
    ...mapState(memberStore, ["userInfo"]),
    ...mapState(houseProductStore, ["product"]),
  },
  methods: {
    ...mapActions(houseProductStore, ["writeProductReview"]),
    // houseProductId, userId, rating, content
    writeReview() {
      this.review.houseProductId = this.product.houseProductId;
      this.review.userId = this.userInfo.userId;
      console.log("# 작성한 review 확인 ", this.review);
      this.writeProductReview(this.review);
    },
  },
  //props: ["houseProductId"],
};
</script>

<style>
.house-product-review-main {
  display: flex;
  flex-direction: column;
}

.house-product-review-register {
  padding: 20px;
}
</style>
