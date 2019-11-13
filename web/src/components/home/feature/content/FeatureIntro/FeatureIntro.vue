<template>
  <div class="feature-intro d-flex flex-column jc-center ai-center px-7">
    <feature-title :titleContent="introContent.title"></feature-title>
    <feature-context :contextContent="introContent.context"></feature-context>
    <feature-button></feature-button>
  </div>
</template>

<script>
// components
import featureTitle from "./content/FeatureTitle";
import featureContext from "./content/FeatureContext";
import featureButton from "./content/FeatureButton";

export default {
  props: ["introContent"],
  data() {
    return {};
  },
  components: {
    "feature-title": featureTitle,
    "feature-context": featureContext,
    "feature-button": featureButton
  }
};
</script>

<style lang="scss" scoped>
.feature-intro {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  background: rgba(27, 27, 27, 0.8);
  transition: all 0.8s ease 0s;
  &:hover {
    opacity: 1;
    .feature-title {
      opacity: 1;
      transform: translateY(0px);
    }
    .feature-context {
      opacity: 1;
    }
  }
}
@media all and (max-width: 840px) {
  .feature-intro{
    padding: 0 1rem;
  }
}
@media all and (max-width: 700px) {
  .feature-intro{
    padding: 0 3rem;
  }
}
@media all and (max-width: 550px) {
  .feature-intro{
    padding: 0 1rem;
  }
}
</style>