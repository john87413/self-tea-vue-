<template>
  <!-- 外圍容器 -->
  <div class="feature-item-container d-flex">
    <!-- 三個方塊 直接都flex-1分佈好等大區塊(好像不需要 因為直接img 設100%就可以等大) -->
    <div
      class="feature-item d-flex flex-1"
      v-for="(item, index) in featureItemContent.featureList"
      :key="index"
    >
      <!-- 底部圖片區 -->
      <feature-img :imgLink="item.img"></feature-img>
      <!-- hover 介紹區 -->
      <feature-intro :introContent="item.intro"></feature-intro>
    </div>
  </div>
</template>

<script>
// components
import FeatureImg from "../../content/FeatureImg/FeatureImg";
import FeatureIntro from "../../content/FeatureIntro/FeatureIntro";

export default {
  props: ["featureItemContent"],
  data() {
    return {};
  },
  components: {
    "feature-img": FeatureImg,
    "feature-intro": FeatureIntro
  }
};
</script>

<style lang="scss" scoped>
.feature-item-container {
  // 內部hover 介紹區 是absolute 這邊要relative
  .feature-item {
    position: relative;
  }
}
@media all and (max-width: 1180px) {
  // 要更改為swiper 這邊要直接消失
  .feature-item-container {
    display: none;
  }
}
</style>