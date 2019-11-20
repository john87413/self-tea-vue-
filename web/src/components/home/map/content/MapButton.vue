<template>
  <div class="map-button w-100 d-flex">
    <!-- 按鈕容器 寬度百分百 裡面元素才可以用相對大小 -->
    <div class="button-container w-100 d-flex jc-between">
      <!-- 尋找按鈕 -->
      <a
        class="button-search d-flex jc-center ai-center fs-lgs text-white"
      >{{mapButtonContent.search}}</a>
      <!-- 加入按鈕 -->
      <a class="button-join d-flex jc-center ai-center fs-lgs text-grey-1">{{mapButtonContent.join}}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["mapButtonContent"],
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/scss/_variable";
.map-button {
  // 按鈕容器
  .button-container {
    // 尋找按鈕
    .button-search {
      position: relative;
      width: calc(50% - 10px);
      height: 4rem;
      background: map-get($colors, "red");
      z-index: 0;
      // 黑色背景
      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
        background: map-get($colors, "black");
        transition: all 0.4s ease;
        z-index: -1;
      }
      // 白色框框
      &::after {
        content: "";
        position: absolute;
        top: 3px;
        left: 4px;
        width: calc(100% - 8px);
        height: calc(100% - 6px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-sizing: border-box;
      }
      &:hover {
        &::before {
          opacity: 1;
        }
      }
    }
    // 加入按鈕
    .button-join {
      position: relative;
      width: calc(50% - 10px);
      height: 4rem;
      background: map-get($colors, "none");
      border: 1px solid rgba(13, 4, 9, 0.5);
      z-index: 0;
      transition: all 0.4s ease;
      // 黑色背景
      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
        background: map-get($colors, "black");
        transition: all 0.4s ease;
        z-index: -1;
      }
      // 內部白色框
      &::after {
        content: "";
        position: absolute;
        top: 3px;
        left: 4px;
        width: calc(100% - 8px);
        height: calc(100% - 6px);
        border: 1px solid rgba(13, 4, 9, 0.2);
        box-sizing: border-box;
        z-index: 0;
      }
      &:hover {
        color: map-get($colors, "white");
        border-color: map-get($colors, "none");
        &::before {
          opacity: 1;
        }
        &::after {
          border-color: rgba(255, 255, 255, 0.2);
        }
      }
    }
  }
}
@media all and (max-width: 640px) {
  .map-button {
    .button-container {
      justify-content: center;
      .button-search {
        margin-right: 1rem;
        width: 13.5rem;
        height: 4rem;
      }
      .button-join {
        margin-left: 1rem;
        width: 13.5rem;
        height: 4rem;
      }
    }
  }
}
@media all and (max-width: 490px) {
  .map-button {
    .button-container {
      flex-direction: column;
      padding: 0 2rem;
      .button-search {
        margin: 0;
        width: 100%;
        height: 3.6rem;
      }
      .button-join {
        margin: 1rem 0 0 0;
        width: 100%;
        height: 3.6rem;
      }
    }
  }
}
</style>