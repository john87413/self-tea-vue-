<template>
  <!-- 文字容器 -->
  <div class="intro-content-text fs-lgs py-6 text-grey">
    <!-- 文字 -->
    <p v-html="introText.text"></p>
  </div>
</template>

<script>
export default {
  props: ["introText"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
// 文字容器
.intro-content-text {
  width: 100%;
  border: 1px solid #302f2e;
  border-top-width: 3px;
  border-bottom-width: 1px;
  border-right: none;
  border-left: none;
  letter-spacing: 0.02rem;
  line-height: 1.8rem;
}
@media all and (max-width: 480px) {
  .intro-content-text {
    p {
      font-size: 16px;
    }
  }
}
</style>