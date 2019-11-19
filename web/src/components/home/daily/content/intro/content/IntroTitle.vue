<template>
  <div class="intro-title pt-11">
    <!-- title 容器 -->
    <div class="title-container d-flex flex-column pt-4">
      <!-- 英文title -->
      <p class="title-en text-primary fs-md fw-bold" v-html="introTitleContent.english"></p>
      <!-- 小 title -->
      <p class="pt-5 fs-xl text-grey">{{introTitleContent.small}}</p>
      <!-- 大 title -->
      <p class="pt-4 pl-2 fs-xxxxl text-black-1">{{introTitleContent.big}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["introTitleContent"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.intro-title {
  .title-container {
    position: relative;
    z-index: 1;
    .title-en {
      font-family: "Times New Roman", sans-serif;
      line-height: 1.3333rem;
      letter-spacing: 0.1em;
    }
    // 髒污裝飾
    &::after {
      content: "";
      z-index: -1;
      position: absolute;
      left: -55px;
      bottom: -160px;
      width: 340px;
      height: 300px;
      background: url("../../../../../../assets/images/share_rendering.jpg")
        no-repeat;
    }
  }
}
</style>