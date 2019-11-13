<template>
  <div class="feature">
    <div class="feature-container d-flex">
        <feature-item :featureItemContent="featureContent"></feature-item>
        <feature-swiper :featureSwiperContent="featureContent"></feature-swiper>
    </div>
  </div>
</template>

<script>
// components
import FeatureItem from './content/FeatureItem/FeatureItem'
import FeatureSwiper from './content/FeatureSwiper/FeatureSwiper'

export default {
  props: ["featureContent"],
  data() {
    return {};
  },
  components: {
      "feature-item": FeatureItem,
      "feature-swiper": FeatureSwiper,
  }
};
</script>

<style lang="scss" scoped>
.feature {
  .feature-container {
    .feature-item {
        position: relative;
    }
  }
}
</style>