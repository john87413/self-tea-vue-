<template>
<!-- 外圍容器 -->
  <div class="feature-intro d-flex flex-column jc-center ai-center px-7">
    <!-- 介紹標題區 -->
    <feature-title :titleContent="introContent.title"></feature-title>
    <!-- 介紹文字區 -->
    <feature-context :contextContent="introContent.context"></feature-context>
    <!-- 介紹按鈕區 -->
    <feature-button></feature-button>
  </div>
</template>

<script>
// components
import featureTitle from "./content/FeatureTitle";
import featureContext from "./content/FeatureContext";
import featureButton from "./content/FeatureButton";

export default {
  props: ["introContent"],
  data() {
    return {};
  },
  components: {
    "feature-title": featureTitle,
    "feature-context": featureContext,
    "feature-button": featureButton
  }
};
</script>

<style lang="scss" scoped>
// 設置絕對位置 並滿版和設置背景
.feature-intro {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  background: rgba(27, 27, 27, 0.8);
  transition: all 0.8s ease 0s;
  // 觸碰出現
  &:hover {
    opacity: 1;
    // title 要有下降效果
    .feature-title {
      opacity: 1;
      transform: translateY(0px);
    }
    // context 要有漸變效果
    .feature-context {
      opacity: 1;
    }
  }
}
// 以下為padding 縮小 or 放大
@media all and (max-width: 840px) {
  .feature-intro{
    padding: 0 1rem;
  }
}
@media all and (max-width: 700px) {
  .feature-intro{
    padding: 0 3rem;
  }
}
@media all and (max-width: 550px) {
  .feature-intro{
    padding: 0 1rem;
  }
}
</style>