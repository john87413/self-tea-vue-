<template>
  <div class="feature-button mt-9">
    <a class="more-link d-flex jc-center ai-center bg-red text-white fs-lgs">了解更多</a>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "../../../../../../assets/scss/_variable";
// 介紹按鈕
.feature-button {
  // z-index設置1才不會被after 擋住
  a {
    width: 16rem;
    height: 3.6rem;
    position: relative;
    z-index: 1;
    // 按鈕裝飾
    &::before {
      content: "";
      position: absolute;
      top: 3px;
      left: 4px;
      width: calc(100% - 8px);
      height: calc(100% - 6px);
      border: 1px solid rgba(13, 4, 9, 0.2);
      border-color: rgba(255, 255, 255, 0.2);
      box-sizing: border-box; // 偽元素不被style.scss 的 * 影響
    }
    // 按鈕hover會變黑色
    // z-index設置-1才不會擋住 文字
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background: map-get($colors, "black");
      opacity: 0;
      z-index: -1;
      transition: all 0.3s ease;
    }
    &:hover {
      &::after {
        opacity: 1;
      }
    }
  }
}
</style>