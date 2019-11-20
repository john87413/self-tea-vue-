<template>
  <div class="main-foot-logo-img w-100">
    <div class="logo-img-container pb-7 mb-5 w-100 d-flex jc-center">
      <a>
        <img :src="logoImgContent.imgLink" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["logoImgContent"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.main-foot-logo-img{
    .logo-img-container{
        border-bottom: 1px solid rgba(82, 82, 82, 0.5);
    }
}
</style>