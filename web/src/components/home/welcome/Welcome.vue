<template>
  <div class="home-welcome">
    <!-- welcome 容器 -->
    <div class="welcome-container d-flex">
      <!-- 右邊裝飾 -->
      <welcome-flower></welcome-flower>
      <!-- 左邊介紹 -->
      <welcome-intro></welcome-intro>
    </div>
  </div>
</template>

<script>
// components
import welcomeFlower from "./content/Flower";
import welcomeIntro from "./content/Intro/Intro";

export default {
  props: ["welcomeContent"],
  data() {
    return {};
  },
  components: {
    "welcome-flower": welcomeFlower,
    "welcome-intro": welcomeIntro
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/_variable.scss";
// welcome 容器 直接設置height 高度會比較好
.welcome-container {
  height: 64rem;
  background: url("../../../assets/images/home_welcome-bg.jpg");
  overflow: hidden;
}
@media all and (max-width: 980px) {
  // height 設置auto (會比較順?)
  .welcome-container {
      justify-content: center;
      height: auto;
  }
}
</style>