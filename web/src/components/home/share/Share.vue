<template>
  <div class="home-share d-flex jc-center py-11">
    <div class="share-container d-flex flex-column">
      <!-- 介紹文字 -->
      <share-intro :introContent="shareContent.introContent"></share-intro>
      <!-- 飲料圖片 -->
      <share-img :imgContent="shareContent.imgContent"></share-img>
      <!-- 飲料swiper -->
      <share-swiper :shareSwiper="shareContent.imgContent"></share-swiper>
    </div>
  </div>
</template>

<script>
// components
import shareIntro from "./content/intro/ShareIntro";
import shareImg from "./content/img/ShareImg";
import shareSwiper from './content/swiper/ShareSwiper'

export default {
  props: ["shareContent"],
  data() {
    return {};
  },
  components: {
    "share-intro": shareIntro,
    "share-img": shareImg,
    "share-swiper": shareSwiper,
  }
};
</script>

<style lang="scss" scoped>
// 大容器 設置背景圖片和超過隱藏
.home-share {
  background: url("../../../assets/images/share_bg.jpg") repeat;
  // overflow: hidden;
  .share-container {
    width: 77.3333rem;
    margin: auto;
  }
}
// 寬 變成100% 讓內文或是圖片自適應(換行或是放大縮小)
@media all and (max-width: 1180px) {
  .home-share {
    padding: 3.5rem 0;
    .share-container {
      width: 100%;
      margin: auto;
    }
  }
}
</style>