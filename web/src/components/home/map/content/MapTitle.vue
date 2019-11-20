<template>
  <div class="map-title">
    <!-- 標題容器 -->
    <div class="title-container mb-9 pb-5">
      <!-- 英文標題 -->
      <p class="pt-3 title-en text-primary fs-md fw-bold" v-html="mapTitleContent.english"></p>
      <!-- 大標題 -->
      <p class="title-big fs-xxxxl text-black-1" v-html="mapTitleContent.big"></p>
      <!-- 小標題 -->
      <p class="mb-4 title-small fs-xl text-grey d-flex jc-end">{{mapTitleContent.small}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["mapTitleContent"],
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang="scss" scoped>
.map-title {
  // 標題容器
  .title-container {
    writing-mode: vertical-rl;
    // 英文標題
    .title-en {
      font-family: "Times New Roman", sans-serif;
      line-height: 1.3333rem;
      letter-spacing: 0.1em;
    }
  }
}
@media all and (max-width: 640px) {
  .map-title {
    .title-container {
        margin-bottom: 3rem
    }
  }
}
</style>