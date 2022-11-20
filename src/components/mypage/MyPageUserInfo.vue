<template>
  <div class="user-info-main">
    <!-- <div class="user-profile-image">profile</div>
    <div class="user-id">
      <span>userId | </span>
      <span>userRole</span>
    </div>
    <div class="user-name">userName</div>
    <div class="user-name">userEmail</div>
    <div class="user-name">userPhoneNumber</div>
    <v-btn>회원정보 수정하기</v-btn> -->
    회원정보
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
