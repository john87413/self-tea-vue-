<template>
  <div class="intro-content-language w-100 d-flex pt-4 fl-wrap">
    <!-- LANGUAGE title -->
    <div class="language-title text-black fs-xxs mr-5">{{introLanguage.languageTitle}}</div>
    <!-- 可點選language 容器 -->
    <div class="language-link d-flex">
      <!-- language 容器 -->
      <div class="link-item d-flex" v-for="(item, index) in introLanguage.languages" :key="index">
        <!-- name -->
        <a class="link text-grey fs-md">{{item}}</a>
        <!-- 空白 和 斜槓 -->
        <div v-if="index !== introLanguage.languages.length - 1" v-html="introLanguage.space"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["introLanguage"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "../../../../../../../../assets/scss/_variable.scss";
.intro-content-language {
  .language-link {
    .link-item {
      // language name
      .link {
        position: relative;
        // 紅色底線 (left right 都設0 就會在中間)
        &::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -3px;
          width: 0;
          height: 1px;
          margin: auto;
          background: map-get($colors, "red-1");
          transition: all 0.5s;
        }
        // 觸發後改變顏色和紅色底線出現
        &:hover {
          color: map-get($colors, "red-1");
          &::after {
            width: 100%;
          }
        }
      }
    }
  }
}
@media all and (max-width: 329px) {
  .intro-content-language{
    .language-link{
      margin-top: 0.3333rem;
    }
  }
}
</style>