<template>
  <div class="head-large-menu">
    <!-- 選單容器 -->
    <div class="menu-container d-flex mt-4">
      <!-- 選單區 -->
      <div class="menu-item d-flex ml-6" v-for="(item, index) in largeMenuContent" :key="index">
        <!-- 選單文字 -->
        <router-link class="menu-link fs-md text-white" tag="a" :to="item.link">{{item.title}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["largeMenuContent"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "../../../../../assets/scss/_variable.scss";
// 選單容器
.menu-container {
  // 選單設置高度(hover 不會斷掉)
  .menu-item {
    height: 2.3rem;
    // 選單文字
    .menu-link {
      letter-spacing: 0.2rem;
      font-family: \5fae\8edf\6b63\9ed1\9ad4, Helvetica, Arial, sans-serif;
      transition: all 0.3s ease;
      position: relative;
      // 下方黃色線條
      &::after {
        content: "";
        position: absolute;
        left: 50%;
        top: 1.4667rem;
        // transform: translateX(-50%);
        width: 0.0667rem;
        height: 0.7rem;
        background: #c09552;
        opacity: 0;
        transition: all 0.5s ease;
      }
    }
    &:hover {
      .menu-link {
        color: map-get($colors, "yellow");
        &::after {
          top: 1.65rem;
          opacity: 1;
        }
      }
    }
  }
}
</style>