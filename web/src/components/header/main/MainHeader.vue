<template>
  <div class="main-header w-100 pt-2" :class="{ showTop: showHeader }">
    <div class="main-nav d-flex jc-center pt-3">
      <!-- 縮小選單與工具區 -->
      <head-small-menu></head-small-menu>
      <!-- logo 區 -->
      <head-logo></head-logo>
      <!-- 放大選單與工具區 -->
      <div class="large-menu d-flex flex-column ai-end jc-end">
        <div class="large-menu-container">
          <!-- 工具區 -->
          <head-tool :toolContent="menuContent.tool"></head-tool>
          <!-- 選單區 -->
          <head-large-menu :largeMenuContent="menuContent.largeMenu"></head-large-menu>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// components
import headSmallMenu from './content/smallMenu/SmallMenu'
import headLogo from "./content/logo/Logo";
import headTool from "./content/tool/Tool";
import headLargeMenu from "./content/largeMenu/LargeMenu";

export default {
  props: ["menuContent"],
  data() {
    return {
      showHeader: false, // 用來控制選單的出現
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollListen); // 監聽滾動
  },
  methods: {
    // 監聽滾動 滾動大於5出現選單 window.pageYOffset 手機電腦都通用
    scrollListen(){
      this.showHeader=(window.pageYOffset > 5)?true:false;
    }
  },
  components: {
    "head-small-menu": headSmallMenu,
    "head-logo": headLogo,
    "head-tool": headTool,
    "head-large-menu": headLargeMenu
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/_variable.scss";
// 最外圍容器 設置fixed 並先隱藏
.main-header {
  position: fixed;
  top: -5.75rem;
  transition: all .5s ease;
  z-index: 999;
  background: url("../../../assets/images/menu_bg.jpg");
  // 外圍容器
  .main-nav {
    // 大選單
    .large-menu {
      width: 61rem;
    }
  }
}
// 選單出現 
.showTop{
  top: 0;
}
@media all and (max-width: 1180px) {
  // 最外圍容器
  .main-header {
    padding: 0;
    // 外圍容器
    .main-nav {
      padding: 0;
      // position: relative;
      // 讓大選單消失
      .large-menu {
        display: none;
      }
    }
  }
}
</style>