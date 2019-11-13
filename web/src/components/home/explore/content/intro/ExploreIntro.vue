<template>
  <!-- 三圓圈容器 -->
  <div class="explore-intro d-flex">
    <!-- 三個介紹區塊 -->
    <div class="explore-intro-item" v-for="(item, index) in introContent" :key="index">
      <explore-intro-item :introContent="item"></explore-intro-item>
    </div>
  </div>
</template>

<script>
// component
import exploreIntroItem from "./content/IntroContent";

export default {
  props: ["introContent"],
  data() {
    return {};
  },
  components: {
    "explore-intro-item": exploreIntroItem
  }
};
</script>

<style lang="scss" scoped>
.explore-intro {
  // 每個介紹區塊的大小 設置絕對位置
  .explore-intro-item {
    position: absolute;
    width: 18.6667rem;
    // text-align: center; // 這個東西讓全部都可以直接置中
    z-index: 1;
    // 將三個介紹區塊做位置分配
    &:nth-child(1) {
      right: 30rem;
    }
    &:nth-child(2) {
      right: 10rem;
      top: 25.3333rem;
    }
    &:nth-child(3) {
      right: 30rem;
      top: 33.3333rem;
    }
  }
}
// 縮小到這邊要換swiper
@media all and (max-width: 1025px) {
  .explore-intro {
    display: none;
  }
}
</style>