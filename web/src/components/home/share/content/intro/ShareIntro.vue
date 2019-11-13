<template>
  <div class="share-intro d-flex jc-center mx-5">
    <!-- 介紹標題 -->
    <share-title :titleContent="introContent.introTitle"></share-title>
    <!-- 介紹內容 -->
    <share-text :textContent="introContent.introText"></share-text>
  </div>
</template>

<script>
// components
import shareTitle from "./content/ShareTitle";
import shareText from "./content/ShareText";

export default {
  props: ["introContent"],
  data() {
    return {};
  },
  components: {
    "share-title": shareTitle,
    "share-text": shareText
  }
};
</script>

<style lang="scss" scoped>
// 這邊要變成垂直排列
@media all and (max-width: 900px) {
  .share-intro {
      flex-direction: column;
  }
}
</style>