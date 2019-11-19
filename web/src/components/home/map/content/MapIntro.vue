<template>
  <div class="map-intro px-7 pb-5 mb-11">
    <p class="intro-content">{{mapIntroContent.content}}</p>
  </div>
</template>

<script>
export default {
  props: ["mapIntroContent"],
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang="scss" scoped>
.map-intro {
  .intro-content {
    font-family: Helvetica, Arial, sans-serif, "微軟正黑體", Heiti TC,
      "メイリオ";
    line-height: 30px;
    color: rgb(68, 68, 68);
    letter-spacing: 0.04em;
  }
}
@media all and (max-width: 640px) {
  .map-intro {
    margin-bottom: 3rem;
    padding: 0 2rem;
  }
}
</style>