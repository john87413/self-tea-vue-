<template>
  <!-- 這邊都靠左對齊 -->
  <div class="intro-title d-flex jc-start">
    <div class="title-cotainer d-flex flex-column mb-9 ai-start">
      <!-- 英文標題 -->
      <p class="title-english fs-md text-primary fw-bold mb-6" v-html="titleContent.english"></p>
      <!-- 小的標題 -->
      <p class="title-small fs-xl text-grey mb-4">{{titleContent.small}}</p>
      <!-- 大的標題 -->
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
  // intro title 容器
  .title-cotainer { 
    position: relative;
    z-index: 0;
    font-family: "cwTeXFangSong", "Times New Roman", sans-serif,
      \5fae\8edf\6b63\9ed1\9ad4, Heiti TC;
    // 一坨髒汙 裝飾
    &::after {
      content: "";
      position: absolute;
      left: -60px;
      top: 60px;
      z-index: -1;
      width: 340px;
      height: 300px;
      background: url("../../../../../../assets/images/meet_rendering.jpg")
        no-repeat;
      background-size: contain;
    }
    // 線條裝飾
    &::before {
      content: "";
      position: absolute;
      right: -115px;
      top: 150px;
      width: 175px;
      height: 1px;
      background: #464646;
      transform: rotate(-35deg);
    }
    // title 英文
    .title-english {
      line-height: 20px;
      letter-spacing: 0.1em;
    }
    // title 小的
    .title-small {
      letter-spacing: 0.06em;
    }
  }
}
// 這邊更改一下 所有元素的大小
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
        right: -100px;
        top: 130px;
      }
    }
  }
}
// 這邊讓線條消失 還有更改間距
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