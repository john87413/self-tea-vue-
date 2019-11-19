<template>
  <div class="home-map d-flex ai-start jc-center">
    <div class="map-container d-flex flex-column jc-center ai-center">
      <map-title :mapTitleContent="mapContent.mapTitle"></map-title>
      <map-intro :mapIntroContent="mapContent.mapIntro"></map-intro>
      <map-button :mapButtonContent="mapContent.mapButton"></map-button>
    </div>
  </div>
</template>

<script>
// components
import mapTitle from "./content/MapTitle";
import mapIntro from "./content/MapIntro";
import mapButton from "./content/MapButton";

export default {
  props: ["mapContent"],
  data() {
    return {};
  },
  components: {
    "map-title": mapTitle,
    "map-intro": mapIntro,
    "map-button": mapButton
  }
};
</script>

<style lang="scss" scoped>
.home-map {
  margin: 7.5rem auto 2rem auto;
  height: 50rem;
  background: url("../../../assets/images/home_map_bg.png") center bottom
    no-repeat;
  .map-container {
    width: 37rem;
    margin: 0 auto;
  }
}
@media all and (max-width: 640px) {
  .home-map {
    margin: 3rem auto;
    background-size: cover;
    height: auto;
    .map-container {
      width: 100%;
    }
  }
}
</style>