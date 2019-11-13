<template>
  <div class="explore-ani"></div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.explore-ani {
  position: absolute;
  top: 23.4667rem;
  left: 0.2667rem;
  background: url("../../../../../assets/images/explore_animate.jpg") no-repeat;
  width: 16.9333rem;
  height: 16.1333rem;
  animation: sprite 1s steps(12) infinite;
}
@media all and (max-width: 1180px) {
  .explore-ani {
    display: none;
  }
}
</style>