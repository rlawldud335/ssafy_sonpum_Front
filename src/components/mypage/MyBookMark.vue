<template>
  <div class="myhouse-product-main">
    <div class="myhouse-product-title">
      <span>내가 북마크한 매물</span>
    </div>

    <div class="myhouse-product-contents">
      <!-- <house-product-item></house-product-item> -->
    </div>
  </div>
</template>

<script>
export default {
  components: {
    // HouseProductItem,
  },
};
</script>

<style>
.myhouse-product-main {
  padding: 20px;
}

.myhouse-product-title {
  display: flex;
  justify-content: space-between;
  margin: 10px;
  font-size: 1.1rem;
  font-weight: bold;
}

.myhouse-product-contents {
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
}
</style>
