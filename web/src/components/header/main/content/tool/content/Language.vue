<template>
  <div class="tool-language d-flex ai-center">
    <!-- language 容器 -->
    <div class="tool-language-container d-flex">
      <!-- item 容器 -->
      <div class="tool-language-item d-flex" v-for="(item, index) in languageContent" :key="index">
        <!-- name -->
        <router-link class="language-link fs-xxs text-white" tag="a" to="/">{{item.name}}</router-link>
        <!-- 空白 和 斜槓 -->
        <div class="text-white" v-if="index !== languageContent.length - 1" v-html="item.space"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["languageContent"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "../../../../../../assets/scss/_variable.scss";
.tool-language-container {
  // item 容器
  .tool-language-item {
    .language-link {
      font-family: \5fae\8edf\6b63\9ed1\9ad4, Helvetica, Arial, sans-serif;
      &:hover {
        color: map-get($colors, "yellow");
      }
    }
  }
}
</style>