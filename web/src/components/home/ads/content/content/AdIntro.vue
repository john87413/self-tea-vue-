<template>
  <div class="home-ad-intro d-flex flex-column ml-4 py-4">
    <!-- 介紹文字容器 -->
    <div class="intro-container flex-1">
      <!-- 介紹 title -->
      <div class="intro-title fs-lg text-black-3 pb-3 mb-4">{{introContent.title}}</div>
      <!-- 介紹文字 -->
      <div class="intro-text fs-s text-grey-1">{{introContent.text}}</div>
    </div>
    <!-- 介紹按鈕 -->
    <div class="intro-more d-flex">
      <a class="more-link d-flex jc-center ai-center bg-red text-white fs-s">了解更多</a>
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
@import "../../../../../assets/scss/_variable.scss";
// 最外圍容器 需要設置hidden 才會有刪除線效果
.home-ad-intro {
  overflow: hidden;
  // intro 文字容器
  .intro-container {
    font-family: Helvetica, Arial, sans-serif, "微軟正黑體";
    // title 容器也要設置hidden 才會有刪除線效果
    .intro-title {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      border-bottom: 1px dashed map-get($colors, "black-3");
    }
    // text
    .intro-text {
      line-height: 1.8rem;
    }
  }
  // 介紹按鈕
  .intro-more {
    // z-index設置1才不會被after 擋住
    a {
      width: 11rem;
      height: 2.5rem;
      position: relative;
      z-index: 1;
      // 按鈕裝飾
      &::before {
        content: "";
        position: absolute;
        left: 4px;
        top: 3px;
        width: calc(100% - 10px);
        height: calc(100% - 8px);
        border: 1px solid rgba(13, 4, 9, 0.2);
        border-color: rgba(255, 255, 255, 0.2);
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
}
// 到這時候要讓介紹文字占滿 所以設width 為95%
@media all and (max-width: 1025px) {
  .home-ad-intro {
    width: 95%;
    .intro-more {
      a {
        width: 10rem;
        height: 2.2rem;
      }
    }
  }
}
// 這邊是要讓按鈕跟文字有點距離
@media all and (max-width: 590px) {
  .home-ad-intro {
    height: 13rem;
  }
}
</style>