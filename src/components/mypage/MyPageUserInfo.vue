<template>
  <div class="myhouse-product-main">
    <div class="myhouse-product-title">
      <span>회원정보</span>
      <div>
        <v-btn class="primary mx-3">수정하기</v-btn>
        <v-btn class="error">탈퇴하기</v-btn>
      </div>
    </div>

    <div>회원정보</div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.user-info-main {
  display: flex;
  background-color: #cbd4e5;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 20px;
  border-radius: 20px;
  box-shadow: 0 5px 18px -7px rgb(133, 133, 133);
}
.user-id {
  background-color: white;
  padding: 5px;
  border-radius: 10px;
  font-size: 1.5rem;
  margin: 10px;
}

.user-profile-image {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #3876f2;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid white;
  color: white;
}
</style>
