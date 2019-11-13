<template>
  <div class="intro-button d-flex">
    <div class="button-container d-flex">
      <a
        class="button-register d-flex ai-center jc-center fs-lgs text-white"
      >{{introButtonContent.register}}</a>
      <a
        class="button-login d-flex ai-center jc-center fs-lgs text-grey-1 ml-4"
      >{{introButtonContent.login}}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["introButtonContent"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "../../../../../../assets/scss/_variable";
.intro-button {
  .button-container {
    .button-register {
      position: relative;
      width: 23rem;
      height: 3.8rem;
      background: map-get($colors, "red");
      z-index: 0;
      &:hover {
        &::before {
          opacity: 1;
        }
      }
      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
        background: map-get($colors, "black");
        z-index: -1;
        transition: all 0.3s ease;
      }
      &::after {
        content: "";
        position: absolute;
        width: calc(100% - 13px);
        height: calc(100% - 10px);
        border: 1px solid rgba(13, 4, 9, 0.2);
        border-color: rgba(255, 255, 255, 0.2);
      }
    }
    .button-login {
      position: relative;
      width: 23rem;
      height: 3.8rem;
      background: map-get($colors, "none");
      border: 1px solid rgba(13, 4, 9, 0.5);
      z-index: 0;
      &:hover {
        color: map-get($colors, "white");
        &::before {
          opacity: 1;
        }
        &::after {
          border-color: rgba(255, 255, 255, 0.2);
        }
      }
      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
        background: map-get($colors, "black");
        z-index: -1;
        transition: all 0.3s ease;
      }
      &::after {
        content: "";
        position: absolute;
        width: calc(100% - 13px);
        height: calc(100% - 10px);
        border: 1px solid rgba(13, 4, 9, 0.2);
        transition: all 0.3s ease;
      }
    }
  }
}
</style>