<template>
  <div class="home-ad-img d-flex">
    <!-- 圖片連結 -->
    <a class="img-link">
      <!-- 圖片 -->
      <img :src="imgContent.imgLink" />
    </a>
  </div>
</template>

<script>
export default {
  props: ["imgContent"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "../../../../../assets/scss/_variable.scss";
// 圖片容器
.home-ad-img {
  border: 3px solid map-get($colors, "white");
  box-shadow: 1px 1px 2px rgba(13, 4, 9, 0.25);
  // 圖片本身
  img {
    width: 16rem;
  }
}
@media all and (max-width: 1025px) {
  .home-ad-img {
    img {
      width: 17rem;
    }
  }
}
@media all and (max-width: 590px) {
  // 他這樣可以自動縮小
  .home-ad-img {
    width: 95%;
    img {
      display: block;
      width: 100%;
    }
  }
}
</style>