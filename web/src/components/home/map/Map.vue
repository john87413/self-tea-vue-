<template>
  <div class="home-map">
    <div class="map-container d-flex flex-column">
      <map-title></map-title>
      <map-intro></map-intro>
      <map-button></map-button>
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
.home-map{
    height: 50rem;
    .map-container{

    }
}
</style>