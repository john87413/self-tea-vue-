<template>
  <!-- d-flex flex-column ai-start 這三個其實不需要 -->
  <div class="explore-title d-flex flex-column ai-start">
    <!-- 大標題 -->
    <p class="big fs-xxxxl text-black-1 ml-2">{{titleContent.big}}</p>
    <!-- 英文標題 -->
    <p class="english fs-md text-primary">{{titleContent.english}}</p>
    <!-- 小標題 -->
    <p class="small fs-xl text-grey mx-4">{{titleContent.small}}</p>
  </div>
</template>

<script>
export default {
  props: ["titleContent"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
// 讓他文字垂直
.explore-title {
  writing-mode: tb-rl;
  position: relative;
  z-index: 0;
  // 髒污裝飾
  &::after {
    content: "";
    position: absolute;
    right: -35px;
    top: 30px;
    z-index: -1;
    width: 340px;
    height: 300px;
    background: url("../../../../../assets/images/explore_rendering.jpg")
      no-repeat;
    background-size: contain;
  }
}
// 讓髒污裝飾消失
@media all and (max-width: 1025px) {
  .explore-title {
    &::after {
      display: none;
    }
  }
}
</style>