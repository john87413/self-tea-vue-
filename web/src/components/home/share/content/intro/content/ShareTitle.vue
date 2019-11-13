<template>
  <div class="intro-title d-flex jc-start">
    <!-- 標題容器 -->
    <div class="title-cotainer d-flex flex-column mb-9 ai-start">
      <!-- 英文 標題 -->
      <p class="title-english fs-md text-primary fw-bold mb-6" v-html="titleContent.english"></p>
      <!-- 小 標題 -->
      <p class="title-small fs-xl text-grey mb-4">{{titleContent.small}}</p>
      <!-- 大 標題 -->
      <p class="title-big fs-xxxxl text-black-1">{{titleContent.big}}</p>
    </div>
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
@import "../../../../../../assets/scss/_variable";
.intro-title {
  // 標題容器 設置nowrap 可以讓他不被擠壓換行
  .title-cotainer {
    white-space: nowrap;
    position: relative;
    z-index: 0;
    font-family: "cwTeXFangSong", "Times New Roman", sans-serif,
      \5fae\8edf\6b63\9ed1\9ad4, Heiti TC;
    // 髒污裝飾
    &::after {
      content: "";
      position: absolute;
      left: -90px;
      top: 60px;
      z-index: -1;
      width: 340px;
      height: 300px;
      background: url("../../../../../../assets/images/share_rendering.jpg")
        no-repeat;
      background-size: contain;
    }
    // 線條裝飾
    &::before {
      content: "";
      position: absolute;
      right: -80px;
      top: 200px;
      width: 175px;
      height: 1px;
      background: #464646;
      transform: rotate(-35deg);
    }
    // 英文標題
    .title-english {
      line-height: 20px;
      letter-spacing: 0.1em;
    }
    // 小標題
    .title-small {
      letter-spacing: 0.06em;
    }
  }
}
// 調整所有字體大小
@media all and (max-width: 590px) {
  .intro-title {
    .title-cotainer {
      .title-english {
        font-size: 15px;
      }
      .title-small {
        font-size: 20px;
      }
      .title-big {
        font-size: 50px;
      }
      &::after {
        width: 340px;
        height: 300px;
      }
      &::before {
        width: 150px;
        right: -90px;
        top: 140px;
      }
    }
  }
}
// 讓線條裝飾消失
@media all and (max-width: 480px) {
  .intro-title {
    .title-cotainer {
      margin-bottom: 2rem;
      &::before {
        display: none;
      }
    }
  }
}
</style>