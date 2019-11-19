<template>
  <div class="map-title">
    <div class="title-container mb-9 pb-5">
      <p class="pt-3 title-en text-primary fs-md fw-bold" v-html="mapTitleContent.english"></p>
      <p class="title-big fs-xxxxl text-black-1" v-html="mapTitleContent.big"></p>
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
  .title-container {
    writing-mode: vertical-rl;
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