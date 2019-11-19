<template>
  <div class="intro-button d-flex">
    <!-- 按鈕 容器 -->
    <div class="button-container d-flex">
      <!-- 註冊按鈕 -->
      <a
        class="button-register d-flex ai-center jc-center fs-lgs text-white"
      >{{introButtonContent.register}}</a>
      <!-- 登入按鈕 -->
      <a
        class="button-login d-flex ai-center jc-center fs-lgs text-grey-1 ml-4"
      >{{introButtonContent.login}}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["introButtonContent"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" >
@import "../../../../../../assets/scss/_variable";
.intro-button {
  // 按鈕容器
  .button-container {
    width: 100%;
    // 註冊按鈕
    .button-register {
      position: relative;
      width: calc(50% - 9px);
      height: 3.8rem;
      background: map-get($colors, "red");
      z-index: 0;
      // 背景是黑色
      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
        background: map-get($colors, "black");
        z-index: -1;
        transition: all 0.3s ease;
      }
      // 外框線條 偽元素不受 style.scss影響 記得加box-sizing: border-box;
      &::after {
        content: "";
        position: absolute;
        top: 3px;
        left: 4px;
        width: calc(100% - 8px);
        height: calc(100% - 6px);
        border: 1px solid rgba(13, 4, 9, 0.2);
        border-color: rgba(255, 255, 255, 0.2);
        box-sizing: border-box;
      }
      &:hover {
        &::before {
          opacity: 1;
        }
      }
    }
    // 登入按鈕
    .button-login {
      position: relative;
      width: calc(50% - 9px);
      height: 3.8rem;
      background: map-get($colors, "none");
      border: 1px solid rgba(13, 4, 9, 0.5);
      z-index: 0;
      // 背景變黑
      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
        background: map-get($colors, "black");
        z-index: -1;
        transition: all 0.3s ease;
      }
      // 外框線條 偽元素不受 style.scss影響 記得加box-sizing: border-box;
      &::after {
        content: "";
        position: absolute;
        top: 3px;
        left: 4px;
        width: calc(100% - 8px);
        height: calc(100% - 6px);
        border: 1px solid rgba(13, 4, 9, 0.2);
        box-sizing: border-box;
        transition: all 0.3s ease;
      }
      &:hover {
        color: map-get($colors, "white");
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
@media all and (max-width: 1180px) {
  .intro-button {
    .button-container {
      .button-register {
        width: calc(50% - 9px);
      }
      .button-login {
        width: calc(50% - 9px);
      }
    }
  }
}
@media all and (max-width: 590px) {
  .intro-button {
    .button-container {
      flex-direction: column;
      .button-register {
        width: 100%;
      }
      .button-login {
        width: 100%;
        margin: 2rem 0 0 0;
      }
    }
  }
}
</style>