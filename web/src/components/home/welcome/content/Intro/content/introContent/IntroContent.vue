<template>
  <div class="intro-content d-flex flex-column ai-center jc-center">
    <!-- 歡迎標題區 -->
    <intro-title :introTitle="introContent.introTitle"></intro-title>
    <!-- 歡迎文字區 -->
    <intro-text :introText="introContent.introText"></intro-text>
    <!-- 歡迎語言區 -->
    <intro-language :introLanguage="introContent.introLanguage"></intro-language>
  </div>
</template>

<script>
// components
import introTitle from "./content/IntroTitle";
import introText from "./content/IntroText";
import introLanguage from "./content/IntroLanguage";

export default {
  props: ["introContent"],
  data() {
    return {};
  },
  components: {
    "intro-title": introTitle,
    "intro-text": introText,
    "intro-language": introLanguage
  }
};
</script>

<style lang="scss" scoped>
@import "../../../../../../../assets/scss/_variable.scss";
.intro-content {
  position: absolute;
  width: 27rem;
  left: 18.5rem;
  top: 15%;
}
@media all and (max-width: 1500px) {
  .intro-content {
    left: 17.5rem;
  }
}
@media all and (max-width: 1330px) {
  .intro-content {
    left: 10rem;
  }
}
@media all and (max-width: 1180px) {
  .intro-content {
    left: 1rem;
  }
}
@media all and (max-width: 980px) {
  .intro-content {
    position: static;
    padding: 3rem 0;
    transition: all .3s ease; 
  }
}
@media all and (max-width: 480px) {
  .intro-content {
    padding: 2rem 1rem; 
  }
}
</style>