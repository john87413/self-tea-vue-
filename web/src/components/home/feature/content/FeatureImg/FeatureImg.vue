<template>
  <div class="feature-img">
    <img class="w-100" :src="imgLink" />
  </div>
</template>

<script>
export default {
  props: ["imgLink"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.feature-img {
  // 加這個才不會有一點點突出來
  img {
    display: block;
  }
}
@media all and (max-width: 700px) {
  .feature-img {
    height: 40rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>