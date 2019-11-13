<template>
  <div class="daily-img">
      <img :src="dailyImgContent.imgUrl">
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
.daily-img {
  position: absolute;
  z-index: 1;
  right: 2rem;
  top: 11rem;
  width: 22.6667rem;
  &::after{
      content: "";
      position: absolute;
      z-index: -1;
      left: 50%;
      bottom: -35px;
      transform: translateX(-50%);
      width: 460px;
      height: 80px;
      background: url("../../../../../assets/images/daily_sign_shadow.png") no-repeat;
  }
  img{
      display: block;
      width: 100%;
  }
}
</style>