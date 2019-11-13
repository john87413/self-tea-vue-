<template>
  <div class="intro-info d-flex">
    <div
      class="info-container d-flex flex-column jc-start ai-center px-5 py-4"
      v-for="(item, index) in introInfoContent"
      :key="index"
    >
      <div class="info-icon mb-3 text-center">
        <img :src="item.imgUrl" />
      </div>
      <p class="info-title fs-lgs text-black-3 fw-bold">{{item.title}}</p>
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
.intro-info {
  z-index: 1;
  margin: 2.6667rem -2rem 4rem;
  .info-container {
    position: relative;
    width: 15rem;
    font-family: Helvetica, Arial, sans-serif, "微軟正黑體", Heiti TC,
      "メイリオ";
    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: 1px;
      height: 100%;
      background: rgba(188, 183, 178, 0.5);
    }
    &:nth-child(3) {
      &::after {
        display: none;
      }
    }
    .info-icon {
      width: 50px;
      img {
        width: 100%;
      }
      &::after {
        content: "";
        display: inline-block;
        width: 20px;
        height: 2px;
        background: #260f00;
        margin: 15px 0;
        z-index: 99;
      }
    }
    .info-content {
      line-height: 24px;
      letter-spacing: 0.075em;
    }
  }
}
</style>