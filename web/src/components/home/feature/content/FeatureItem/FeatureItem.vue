<template>
  <div class="feature-item-container d-flex">
    <div
      class="feature-item d-flex flex-column flex-1"
      v-for="(item, index) in featureItemContent.featureList"
      :key="index"
    >
      <feature-img :imgLink="item.img"></feature-img>
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
  .feature-item {
    position: relative;
  }
}
@media all and (max-width: 1180px) {
  .feature-item-container {
    display: none;
  }
}
</style>