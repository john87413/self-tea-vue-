<template>
  <div class="meet-img d-flex ai-center jc-center">
    <img class src="../../../../../assets/images/meet_img_01.png" />
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
// 一開始設置絕對位置 不會縮小 但可能超出去被隱藏
.meet-img {
  position: absolute;
  width: 53.3333rem;
  top: 15%;
  right: -10rem;
  // 圖片設置 block 防止小空隙 還有寬高
  img {
    display: block;
    width: 100%;
    height: auto;
  }
}
// 到這邊不用絕對位置 寬設100%
@media all and (max-width: 1220px) {
  .meet-img {
    position: static;
    float: left;
    width: 100%;
    img {
      width: 100%;
    }
  }
}
// 底下為不會抖動的作法 但麻煩
// @media all and (max-width: 1025px) {
//   .meet-img {
//       img {
//         width: 50rem;
//       }
//   }
// }
// @media all and (max-width: 760px) {
//   .meet-img {
//       img {
//         width: 45rem;
//       }
//   }
// }
// @media all and (max-width: 595px) {
//   .meet-img {
//       img {
//         width: 35rem;
//       }
//   }
// }
// @media all and (max-width: 490px) {
//   .meet-img {
//       img {
//         width: 30rem;
//       }
//   }
// }
</style>