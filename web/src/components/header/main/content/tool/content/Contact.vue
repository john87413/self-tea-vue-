<template>
  <div class="tool-cantact">
    <!-- contact 外圍容器 -->
    <div class="tool-contact-conatiner d-flex mx-4">
      <!-- contact icon 容器 -->
      <div
        class="tool-contact-item mx-4 d-flex jc-center ai-center pt-1 pl-1 bg-grey-4"
        v-for="(item, index) in contactContent"
        :key="index"
      >
        <!-- icon 本身 -->
        <i class="contact-icon iconfont fs-xs" :class="`icon-${item.icon}`"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["contactContent"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
// contact 容器
.tool-contact-conatiner {
  // icon 容器
  .tool-contact-item {
    width: 1.7rem;
    height: 1.7rem;
    border-radius: 50%;
    position: relative;
    transition: all 0.3s ease;
    cursor: pointer;
    // 為了IG 設置的 不然會被擋到
    .contact-icon {
      z-index: 1;
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
</style>