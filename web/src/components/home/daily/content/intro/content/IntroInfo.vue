<template>
  <div class="intro-info d-flex">
    <!-- 三方塊 -->
    <div
      class="info-container d-flex flex-column jc-start ai-center px-5 py-4"
      v-for="(item, index) in introInfoContent"
      :key="index"
    >
      <!-- 圖片區 設置cneter讓icon 底線可以置中-->
      <div class="info-icon mb-3 text-center">
        <img :src="item.imgUrl" />
      </div>
      <!-- 資訊 title -->
      <p class="info-title fs-lgs text-black-3 fw-bold">{{item.title}}</p>
      <!-- 資訊 content -->
      <p class="info-content fs-s text-center text-yellow-1 mt-4" v-html="item.content"></p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["introInfoContent"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
// 三方塊外圍容器
.intro-info {
  z-index: 1;
  margin: 2.6667rem 0 4rem 0;
  // 三方塊
  .info-container {
    position: relative;
    width: 15rem;
    font-family: Helvetica, Arial, sans-serif, "微軟正黑體", Heiti TC,
      "メイリオ";
    // 三方塊線條
    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: 1px;
      height: 100%;
      background: rgba(188, 183, 178, 0.5);
    }
    // 第三個不用有線條
    &:nth-child(3) {
      &::after {
        display: none;
      }
    }
    // 方塊內部icon
    .info-icon {
      width: 3.3333rem;
      img {
        width: 100%;
      }
      // Icon 底線
      &::after {
        content: "";
        display: inline-block; // display : block;
        width: 1.3333rem;
        height: 0.1333rem;
        background: #260f00;
        margin: 1rem 0; // margin: 15px auto
        // z-index: 99;
      }
    }
    // 介紹標題
    .info-title {
      letter-spacing: 0.075em;
    }
    // 介紹內容
    .info-content {
      line-height: 1.6rem;
      letter-spacing: 0.075em;
    }
  }
}
@media all and (max-width: 1180px) {
  .intro-info {
    margin: 2.6667rem 0rem 4rem 0;
    // 可以分成三等份
    .info-container {
      width: calc(100% / 3); //也可以 flex-grow: 1;
      padding: 1rem;
    }
  }
}
@media all and (max-width: 590px) {
  .intro-info {
    flex-direction: column;
    margin: 2rem 0;
    .info-container {
      width: 100%;
      // 線條變下面
      &::after {
        bottom: 0;
        top: unset;
        right: 0;
        width: 100%;
        height: 0.0667rem;
        background: rgba(188, 183, 178, 0.5);
      }
      .info-icon {
        width: 5rem;
        &::after {
          width: 2rem;
        }
      }
      .info-title {
        font-size: 1.3333rem;
      }
      .info-content {
        font-size: 1.2rem;
      }
    }
  }
}
</style>