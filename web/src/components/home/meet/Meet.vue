<template>
  <div class="home-meet d-flex jc-center">
    <div class="meet-container d-flex">
      <!-- meet 文字區 -->
      <meet-intro :introContent="meetContent.meetIntro"></meet-intro>
      <!-- meet 圖片區 -->
      <meet-img :imgContent="meetContent.meetImg"></meet-img>
    </div>
  </div>
</template>

<script>
// components
import meetIntro from "./content/intro/MeetIntro";
import meetImg from "./content/img/MeetImg";

export default {
  props: ["meetContent"],
  data() {
    return {};
  },
  components: {
    "meet-intro": meetIntro,
    "meet-img": meetImg
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/_variable";
// 大容器 設置背景圖片 和 讓圖片可以超出去
.home-meet {
  background: url("../../../assets/images/meet_bg.jpg");
  overflow: hidden;
  // 設置 寬度和 relative
  .meet-container {
    position: relative;
    width: 77.3333rem;
    padding: 9rem 0;
    // 在上面的小樹枝
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 10%;
      width: 11.3333rem;
      height: 8.4rem;
      background: url("../../../assets/images/meet_tree.jpg") no-repeat left top;
    }
  }
}
// 變垂直
@media all and (max-width: 1025px) {
  .home-meet {
    .meet-container {
      flex-direction: column;
      padding: 9rem 1rem 2rem 1rem;
    }
  }
}
@media all and (max-width: 590px) {
  .home-meet {
    .meet-container {
     padding: 9rem 0.2rem 2rem 0.2rem;
    }
  }
}
</style>