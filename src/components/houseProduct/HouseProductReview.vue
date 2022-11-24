<template>
  <div class="house-product-review-main">
    <div class="house-product-review-register">
      <div style="display: flex; flex-direction: row; align-items: center">
        <v-avatar size="36" color="pink">
          <v-icon dark> mdi-account-circle </v-icon>
        </v-avatar>
        <p style="font-size: 1rem; margin: 0; margin-left: 10px">userId</p>
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
      ></v-text-field>
    </div>
    <div>리뷰리스트입니다</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      review: {
        houseProductId: null,
        userId: null,
        content: null,
        rating: null,
        image: null,
      },
    };
  },
  props: ["houseProductId"],
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
