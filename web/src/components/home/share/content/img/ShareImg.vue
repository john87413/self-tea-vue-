<template>
  <div class="share-img mt-10">
    <div class="img-container mt-7 d-flex jc-center">
      <div class="img-item mx-7" v-for="(item, index) in imgContent.imgList" :key="index">
        <img :src="item.imgLink" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["imgContent"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.share-img {
  .img-container {
    .img-item {
    }
  }
}
@media all and (max-width: 1180px) {
  .share-img {
    .img-container {
      .img-item {
        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
}
@media all and (max-width: 900px) {
  .share-img {
    display: none;
  }
}
</style>