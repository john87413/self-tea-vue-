<template>
  <div class="feature-img">
    <!-- 限制寬度100%直接可以區分為三區塊 高度自適應 -->
    <img class="w-100" :src="imgLink" />
  </div>
</template>

<script>
export default {
  props: ["imgLink"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.feature-img {
  img {
    display: block; // 加這個才不會有一點點突出來
  }
}
@media all and (max-width: 700px) {
  .feature-img {
    height: 40rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover; //可以讓整個圖片比較好看
    }
  }
}
</style>