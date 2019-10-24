<template>
<!-- 背景小樹枝 -->
  <div class="intro-decorate">
    <!-- 小燈籠 -->
    <img class="decorate-item" src="../../../../../../../assets/images/decorate_lantern.png" />
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
// 背景小樹枝
.intro-decorate {
  position: absolute;
  left: 41rem;
  width: 17.5rem;
  height: 17rem;
  background: url("../../../../../../../assets/images/decorate_tree.png")
    no-repeat;
  transition: all 0.3s ease;
  // 小燈籠
  .decorate-item {
    position: absolute;
    right: 12.5rem;
    transition: all 0.3s ease;
  }
}
@media all and (max-width: 1500px) {
  .intro-decorate {
    left: 39rem;
  }
}
@media all and (max-width: 1330px) {
  .intro-decorate {
    left: 33rem;
  }
}
@media all and (max-width: 1180px) {
  .intro-decorate {
    left: 24rem;
  }
}
@media all and (max-width: 980px) {
  // 這邊設置不要有動畫 不然會很奇怪
  .intro-decorate {
    left: 85%;
    transition: all 0s ease;
    .decorate-item {
      transition: all 0s ease;
    }
  }
}
@media all and (max-width: 480px) {
  .intro-decorate {
    left: 60%;
    width: 17.5rem;
    height: 17rem;
    transition: all .3s ease;
    .decorate-item {
      width: 4rem;
      right: 0;
      left: 30%;
      transition: all .3s ease;
    }
  }
}
</style>