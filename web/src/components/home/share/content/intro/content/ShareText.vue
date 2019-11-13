<template>
  <div class="intro-context pl-10 flex-1">
    <!-- 介紹文字 -->
    <div class="intro-container">
      <!-- 介紹標題 -->
      <p class="title fs-xxl text-black">{{textContent.title}}</p>
      <!-- 介紹內容 -->
      <p class="text fs-md text-grey mt-6 mb-8">{{textContent.text}}</p>
    </div>
    <!-- 介紹button -->
    <div class="button-container d-flex">
      <a
        class="drinks-link d-flex jc-center ai-center bg-red text-white fs-lgs"
      >{{textContent.button}}</a>
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
@import "../../../../../../assets/scss/_variable";
// 設置最小寬度 (因為有flex-1 所以他會自己放大)
.intro-context {
  width: 40rem;
  margin: 3.5rem 0 0 0;
  padding: 0 0 0 10rem;
  z-index: 1;
  // 介紹文字容器
  .intro-container {
    .title {
      letter-spacing: 0.08em;
    }
    .text {
      font-family: sans-serif, \5fae\8edf\6b63\9ed1\9ad4, Heiti TC;
      line-height: 30px;
      text-align: justify;
    }
  }
  // 按鈕容器
  .button-container {
    .drinks-link {
      width: 16rem;
      height: 3.6rem;
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
// 這邊變成垂直排列 寬度需調為100% 讓內容自動換行
@media all and (max-width: 900px) {
  .intro-context {
    width: 100%;
    margin: 0 0 0 0;
    padding: 3rem 0 0 0;
  }
}
// 調整整體的間距和字體
@media all and (max-width: 590px) {
  .intro-context {
    padding: 1.5rem 0 0 0;
    .intro-container {
      .title {
        font-size: 1.8rem;
      }
      .text {
        margin: 2rem 0;
      }
    }
  }
}
// 調整字體
@media all and (max-width: 380px) {
  .intro-context {
    .intro-container {
      .title {
        font-size: 1.6rem;
      }
    }
  }
}
</style>