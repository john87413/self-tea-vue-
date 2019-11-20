<template>
<!-- 地圖背景 -->
  <div class="home-map">
    <!-- 世界地圖 -->
    <div class="map-container d-flex flex-column jc-center ai-center">
      <!-- 內容容器 -->
      <div class="map-content d-flex flex-column ai-center">
        <!-- 標題區 -->
        <map-title :mapTitleContent="mapContent.mapTitle"></map-title>
        <!-- 介紹區 -->
        <map-intro :mapIntroContent="mapContent.mapIntro"></map-intro>
        <!-- 按鈕區 -->
        <map-button :mapButtonContent="mapContent.mapButton"></map-button>
      </div>
    </div>
  </div>
</template>

<script>
// components
import mapTitle from "./content/MapTitle";
import mapIntro from "./content/MapIntro";
import mapButton from "./content/MapButton";

export default {
  props: ["mapContent"],
  data() {
    return {};
  },
  components: {
    "map-title": mapTitle,
    "map-intro": mapIntro,
    "map-button": mapButton
  }
};
</script>

<style lang="scss" scoped>
// 背景區
.home-map {
  padding: 7.5rem 0 5rem 0;
  background: url("../../../assets/images/map-bg.jpg") repeat;
  // 世界地圖
  .map-container {
    height: 50rem;
    background: url("../../../assets/images/home_map_bg.png") center bottom
      no-repeat;
    // 內容容器
    .map-content {
      width: 37rem;
      margin: 0 auto;
    }
  }
}
@media all and (max-width: 640px) {
  .home-map {
    padding: 3rem 0 5rem 0;
    .map-container {
      background-size: cover;
      height: auto;
      .map-content {
        width: 100%;
      }
    }
  }
}
</style>