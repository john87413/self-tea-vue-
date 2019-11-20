<template>
  <div class="main-foot-contact-button w-100">
    <div class="contct-button-container my-8 d-flex jc-center">
      <div
        class="button-content mx-4 d-flex jc-center ai-center bg-grey-4"
        v-for="(item, index) in contactButtonContent.contactList"
        :key="index"
      >
        <i class="foot-icon-contact iconfont" :class="`icon-${item.icon}`"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["contactButtonContent"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.main-foot-contact-button {
  .contct-button-container {
    .button-content {
      width: 2.2rem;
      height: 2.2rem;
      border-radius: 50%;
      position: relative;
      transition: all 0.3s ease;
      cursor: pointer;
      // 為了IG 設置的 不然會被擋到
      .foot-icon-contact {
        z-index: 1;
        font-size: 1.3rem
      }
      // 為了 IG 設置的 要多一個漸層顏色
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        z-index: 0;
        background: transparent;
        transition: all 0.3s ease;
      }
      // LINE
      &:nth-child(1) {
        &:hover {
          background: #adff2f;
        }
      }
      // FB
      &:nth-child(2) {
        &:hover {
          background: #48529a;
        }
      }
      // IG
      &:nth-child(3) {
        &:hover {
          background: linear-gradient(145deg, #3051f1 10%, #c92bb7 70%);
          &::after {
            background: radial-gradient(
              circle farthest-corner at 28% 100%,
              #fcdf8f 0%,
              #fbd377 10%,
              #fa8e37 22%,
              #f73344 35%,
              rgba(247, 51, 68, 0) 65%
            );
          }
        }
      }
    }
  }
}
</style>