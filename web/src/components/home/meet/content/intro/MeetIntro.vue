<template>
  <div class="meet-intro d-flex flex-column mx-5">
    <!-- intro 標題區 -->
    <intro-title :titleContent="introContent.introTitle"></intro-title>
    <!-- intro 文字區 -->
    <intro-text :textContent="introContent.introText"></intro-text>
  </div>
</template>

<script>
// components
import meetIntroTitle from "./content/MeetTitle";
import meetIntroText from "./content/MeetText";

export default {
  props: ["introContent"],
  data() {
    return {};
  },
  components: {
    "intro-title": meetIntroTitle,
    "intro-text": meetIntroText
  }
};
</script>

<style lang="scss" scoped>
// 讓 x 軸的間距縮小
@media all and (max-width: 590px) {
  .meet-intro{
    margin: 0rem 0.7rem;
  }
}
</style>