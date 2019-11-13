<template>
  <div class="intro-text">
    <!-- 文本容器 -->
    <div class="text-container">
      <!-- 文字標題 -->
      <p class="text-title fs-xxl text-black">{{textContent.title}}</p>
      <!-- 文字內容 -->
      <p class="text-text fs-md text-grey mt-5">{{textContent.text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["textContent"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.intro-text {
  z-index: 1;
  // 這邊要設置寬度 防止文字蓋到圖片
  .text-container {
    width: 32rem;
    .text-title {
      letter-spacing: 0.08em;
    }
    .text-text {
      font-family: sans-serif, \5fae\8edf\6b63\9ed1\9ad4, Heiti TC;
      line-height: 30px;
      text-align: justify;
    }
  }
}
// 這邊改成垂直排列 要讓寬度自適應
@media all and (max-width: 1025px) {
  .intro-text {
    .text-container {
      width: auto;
    }
  }
}
// 這邊為了方便觀看要縮小字體
@media all and (max-width: 590px) {
  .intro-text {
    .text-container {
      .text-title {
        font-size: 24px;
      }
      .text-text {
        font-size: 15px;
      }
    }
  }
}
</style>