<template>
  <div class="explore-intro-content d-flex flex-column ai-center">
    <!-- 圓圈圖片區 -->
    <div class="intro-img d-flex jc-center ai-center">
      <!-- 將圖片設為連結 -->
      <a class="d-flex jc-center ai-center">
        <img :src="introContent.img" />
      </a>
    </div>
    <!-- 介紹文字區 -->
    <div class="intro-context d-flex flex-column ai-center">
      <!-- 介紹標題 -->
      <div class="context-title my-5 px-4 text-grey">
        <!-- 標題 大字 -->
        <span class="fs-xxxl">{{introContent.titleBig}}</span>
        <!-- 標題 小字 -->
        <span class="fs-xl">{{introContent.titleSmall}}</span>
      </div>
      <!-- 介紹內容 -->
      <div class="context-text text-center fs-xs text-grey-1">{{introContent.text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["introContent"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.explore-intro-content {
  // 圖片容器
  .intro-img {
    position: relative;
    width: 7.5rem;
    height: 7.5rem;
    border: 2px solid rgba(13, 4, 9, 0.8);
    border-radius: 50%;
    // 內部圓缺裝飾
    &::before {
      content: "";
      position: absolute;
      top: 0.3rem;
      left: 0.3rem;
      right: 0.3rem;
      bottom: 0.3rem;
      border: 1px solid rgba(13, 4, 9, 0.5);
      border-radius: 50%;
    }
  }
  // 介紹文字容器
  .intro-context {
    // 介紹標題
    .context-title {
      position: relative;
      // 左邊引號裝飾
      &::after {
        content: "」";
        position: absolute;
        bottom: 0;
        right: 1px;
        font-size: 25px;
      }
      // 右邊引號裝飾
      &::before {
        content: "「";
        position: absolute;
        top: -8px;
        left: 0;
        font-size: 30px;
      }
    }
    // 介紹內容
    .context-text {
      line-height: 25px;
      font-family: "Times New Roman", sans-serif, \5fae\8edf\6b63\9ed1\9ad4,
        Heiti TC;
    }
  }
}
</style>