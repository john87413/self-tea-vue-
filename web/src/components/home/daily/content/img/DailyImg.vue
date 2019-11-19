<template>
  <!-- 手機圖 容器 -->
  <div class="daily-img">
    <!-- 手機圖 -->
    <img :src="dailyImgContent.imgUrl" />
  </div>
</template>

<script>
export default {
  props: ["dailyImgContent"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
// 手機 容器 位置設為絕對 並設置 z-index
.daily-img {
  position: absolute;
  z-index: 1;
  right: 2rem;
  top: 11rem;
  width: 22.6667rem;
  // 手機陰影 位置一樣絕對 並設置 z-index 和
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    left: 50%;
    bottom: -2.3333rem;
    transform: translateX(-50%);
    width: 30.6667rem;
    height: 5.3333rem;
    background: url("../../../../../assets/images/daily_sign_shadow.png")
      no-repeat;
  }
  img {
    display: block;
    width: 100%;
    height: auto;
  }
}
@media all and (max-width: 1180px) {
  .daily-img {
    position: static;
    float: left;
    padding: 3.5rem 0 0 0rem;
    width: 23rem;
    // 陰影消失
    &::after {
      display: none;
    }
  }
}
@media all and (max-width: 590px) {
  .daily-img {
    align-self: center;
  }
}
@media all and (max-width: 420px) {
  .daily-img {
    width: 90%;
  }
}
</style>