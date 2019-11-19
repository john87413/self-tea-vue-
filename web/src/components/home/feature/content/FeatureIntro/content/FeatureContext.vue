<template>
  <div class="feature-context p-6">
    <!-- 介紹文字 -->
    <p class="text-grey-5 text-center">{{contextContent}}</p>
  </div>
</template>

<script>
export default {
  props: ["contextContent"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.feature-context {
  border-width: 1px 0px; // border 上下 1px 左右 0px
  border-style: dashed ; // border 虛線
  border-color: rgb(255, 255, 255);
  opacity: 0;
  transition: all 0.8s ease 0s;
  p {
    letter-spacing: 0.1em;
    line-height: 33px;
    transition: all 0.8s ease 0.2s;
    font-family: Helvetica, Arial, sans-serif, 微軟正黑體, "Heiti TC", メイリオ;
  }
}
@media all and (max-width: 840px) {
  .feature-context {
    padding: 1rem;
    p {
      line-height: 26px;
    }
  }
}
@media all and (max-width: 700px) {
  .feature-context {
    padding: 2rem;
    p {
      line-height: 33px;
    }
  }
}
@media all and (max-width: 550px) {
  .feature-context {
    padding: 1rem;
    p {
      line-height: 33px;
    }
  }
}
@media all and (max-width: 420px) {
  .feature-context {
    padding: 1rem 0;
  }
}
</style>