<template>
  <!-- ad 容器 -->
  <div class="ad-container d-flex jc-center py-7">
    <!-- ad item 容器 -->
    <div class="home-ad-item d-flex jc-center px-4" v-for="(item, index) in adContent" :key="index">
      <!-- ad img -->
      <home-ad-img :imgContent="item"></home-ad-img>
      <!-- ad intro -->
      <home-ad-intro :introContent="item"></home-ad-intro>
    </div>
  </div>
</template>

<script>
// components
import homeAdImg from "./content/AdImg";
import homeAdIntro from "./content/AdIntro";

export default {
  props: ["adContent"],
  data() {
    return {};
  },
  components: {
    "home-ad-img": homeAdImg,
    "home-ad-intro": homeAdIntro
  }
};
</script>

<style lang="scss" scoped>
// ad 外圍容器 設置大小
.ad-container {
  width: 79rem;
  margin: 0 auto;
  // ad Item 設置一半
  .home-ad-item {
    width: 50%;
  }
}
@media all and (max-width: 1200px) {
  // 設置100% 他才可以縮小自己以自動換行
  .ad-container {
    padding: 0 0;
    width: 100%;
  }
}
@media all and (max-width: 1025px) {
  .ad-container {
    display: none;
  }
}
</style>