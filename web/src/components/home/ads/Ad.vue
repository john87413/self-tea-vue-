<template>
  <div class="home-advertisement d-flex jc-center py-7">
    <!-- 原本的兩格式 -->
    <ad-item :adContent="adContent"></ad-item>
    <!-- 縮小後的滑動式 -->
    <ad-swiper :adSwiper="adContent"></ad-swiper>
  </div>
</template>

<script>
// components
import adItem from "./content/AdItem";
import adSwiper from "./content/AdSwiper";

export default {
  props: ["adContent"],
  data() {
    return {};
  },
  mounted() {},
  components: {
    "ad-item": adItem,
    "ad-swiper": adSwiper
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/_variable.scss";
.home-advertisement {
  background: url("../../../assets/images/home_ad_bg.jpg");
}
@media all and (max-width: 1025px) {
  // swiper 外圍不要用flex!!!!!!!!!!!!!!!!(如果裡面沒有設置大小)
  .home-advertisement {
    display: block;
    padding: 0 0;
  }
}
</style>