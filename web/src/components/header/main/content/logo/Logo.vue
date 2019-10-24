<template>
  <div class="head-logo d-flex">
    <!-- 容器 -->
    <div class="nav-logo d-flex jc-center">
      <!-- LOGO 本身 -->
      <router-link class="logo-container" tag="a" to="/main"></router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.head-logo {
  // 設置容器大小
  .nav-logo {
    width: 15rem;
    height: 3.5rem;
    // LOGO本身 大小
    .logo-container {
      width: 100%;
      height: auto;
      background: url("../../../../../assets/images/menu_logo.png") no-repeat;
      background-size: contain;
    }
  }
}
@media all and (max-width: 1180px) {
  .head-logo {
    padding-top: 0.8rem;
    .nav-logo {
      width: 8rem;
      height: 3.3rem;
    }
  }
}
@media all and (max-width: 590px) {
  .head-logo {
    .nav-logo {
      width: 7.5rem;
      height: 3rem;
    }
  }
}
</style>