<template>
  <div class="feature">
    <!-- 外圍容器 -->
    <div class="feature-container d-flex">
      <!-- 三個 不可滑動布局 -->
      <feature-item :featureItemContent="featureContent"></feature-item>
      <!-- 三個 可滑動布局 -->
      <feature-swiper :featureSwiperContent="featureContent"></feature-swiper>
    </div>
  </div>
</template>

<script>
// components
import FeatureItem from "./content/FeatureItem/FeatureItem";
import FeatureSwiper from "./content/FeatureSwiper/FeatureSwiper";

export default {
  props: ["featureContent"],
  data() {
    return {};
  },
  components: {
    "feature-item": FeatureItem,
    "feature-swiper": FeatureSwiper
  }
};
</script>

<style lang="scss" scoped>
</style>