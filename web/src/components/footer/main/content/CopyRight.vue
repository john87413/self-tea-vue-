<template>
  <div class="main-foot-copy-right">
    <p class="text-grey-4 fs-xxs text-center">{{copyRightContent.content}}</p>
  </div>
</template>

<script>
export default {
  props: ["copyRightContent"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.main-foot-copy-right {
  font-family: Helvetica, Arial, sans-serif, "微軟正黑體", Heiti TC, "メイリオ";
}
</style>