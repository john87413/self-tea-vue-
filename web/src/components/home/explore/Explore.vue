<template>
  <div class="home-explore d-flex jc-center">
    <!-- 對齊最右邊 -->
    <div class="explore-container d-flex jc-end">
      <!-- 流動茶的動畫 -->
      <explore-animate></explore-animate>
      <!-- 三個圓圈 intro -->
      <explore-intro id="exploreIntro" :introContent="exploreContent.exploreIntro"></explore-intro>
      <!-- 標題 -->
      <explore-title id="exploreTitle" :titleContent="exploreContent.exploreTitle"></explore-title>
      <!-- 滑動 intro -->
      <explore-swiper :exploreSwiper="exploreContent.exploreIntro"></explore-swiper>
    </div>
  </div>
</template>

<script>
// components
import exploreTitle from "./content/title/ExploreTitle";
import exploreIntro from "./content/intro/ExploreIntro";
import exploreAnimae from "./content/animateImg/ExploreAnimate";
import exploreSwiper from "./content/swiper/ExploreSwiper";

export default {
  props: ["exploreContent"],
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  components: {
    "explore-title": exploreTitle,
    "explore-intro": exploreIntro,
    "explore-animate": exploreAnimae,
    "explore-swiper": exploreSwiper
  }
};
</script>

<style lang="scss" scoped>
// 大容器 設置背景還有超過的要隱藏(應該是那團髒污裝飾會超出去)
.home-explore {
  background: url("../../../assets/images/explore_bg.jpg") no-repeat center top;
  overflow: hidden;
  // 內容容器 要設置高度 因為那些介紹區塊都是absolute不會有高度
  .explore-container {
    position: relative;
    padding: 9rem 0 4rem 0;
    width: 77.3333rem;
    height: 56rem;
    margin: auto;
  }
}
// 到這裡直接讓寬百分之百
@media all and (max-width: 1180px) {
  .home-explore {
    .explore-container {
      padding: 9rem 2rem 4rem 2rem;
      width: 100%;
      margin: auto;
    }
  }
}
// 這邊改成垂直排列 縮小高度
@media all and (max-width: 1025px) {
  .home-explore {
    .explore-container {
      height: 50rem;
      padding: 0 0 0 20%;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
    }
  }
}
// 這邊讓有茶壺的背景不要出現茶壺
@media all and (max-width: 760px) {
  .home-explore {
    background: url("../../../assets/images/explore_bg.jpg") no-repeat right top;
    .explore-container {
      padding: 0;
    }
  }
}
</style>