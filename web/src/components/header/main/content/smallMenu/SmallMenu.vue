<template>
  <!-- 小選單容器 -->
  <div class="head-small-menu d-flex">
    <!-- 小選單本身 -->
    <a
      class="small-menu-button"
      :class="{ show: isShow }"
      @click="isShow=(isShow === false)?true:false;"
    >
      <!-- 線條 -->
      <span></span>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false
    };
  }
};
</script>

<style lang="scss" scoped>
// 小選單容器 一開始為none
.head-small-menu {
  display: none;
  position: absolute;
  left: 1rem;
  // 選單按鈕 設置大小
  a.small-menu-button {
    width: 2rem;
    height: 4rem;
    // 按鈕的三條線
    span {
      position: absolute;
      left: 0;
      top: 50%;
      width: 100%;
      height: 0.0667rem;
      background: rgba(255, 255, 255, 0.75);
      // transform: translateY(0);
      transition: all 0.6s;
      // 上方線條
      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 0.0667rem;
        background: rgba(255, 255, 255, 0.75);
        transform: translateY(-8px);
        transition: all 0.6s;
      }
      // 下方線條
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 0.0667rem;
        background: rgba(255, 255, 255, 0.75);
        transform: translateY(8px);
        transition: all 0.6s;
      }
    }
  }
}
// 選單按下去時(因為底下有 span 所以得要用a.small-menu-button.show 
//             他才會知道span 是哪裡的 span)
a.small-menu-button.show {
  // 中間變透明
  span {
    background: transparent;
    // 上方下移45度
    &::before {
      transform: rotate(45deg);
    }
    // 下方上移45度
    &::after {
      transform: rotate(-45deg);
    }
  }
}
@media all and (max-width: 1180px) {
  // 這時要出現
  .head-small-menu {
    display: flex;
  }
}
</style>