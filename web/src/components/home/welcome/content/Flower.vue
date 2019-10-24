<template>
  <div class="welcome-flower flex-1">
    <!-- 背景大樹 -->
    <img class="big-tree" src="../../../../assets/images/welcome_big_tree.jpg" />
    <!-- 三朵小花 -->
    <div class="small-flower" v-for="(item, index) in flowers" :key="index">
      <img class="flower-item" :src="item" />
    </div>
  </div>
</template>

<script>
// images
import flower_01 from "../../../../assets/images/flower_01.png";
import flower_02 from "../../../../assets/images/flower_02.png";
import flower_03 from "../../../../assets/images/flower_03.png";

export default {
  data() {
    return {
      flowers: [flower_01, flower_02, flower_03]
    };
  }
};
</script>

<style lang="scss" scoped>
// 外圍容器
.welcome-flower {
  position: relative;
  width: 45rem;
  // 大樹
  .big-tree {
    position: absolute;
    left: 0rem;
    transition: all 0.3s ease;
  }
  // 小花
  .small-flower {
    position: absolute;
    transition: all 0.3s ease;
    // 中間那一朵
    &:nth-child(2) {
      left: 20rem;
      bottom: 27%;
    }
    // 左邊那一朵
    &:nth-child(3) {
      left: 14rem;
      bottom: 4%;
    }
    // 右邊那一朵
    &:nth-child(4) {
      left: 43rem;
      bottom: 20%;
    }
  }
}
@media all and (max-width: 1330px) {
  .welcome-flower {
    .big-tree {
      left: -8rem;
    }
    .small-flower {
      &:nth-child(2) {
        left: 11.3333rem;
      }
      &:nth-child(3) {
        left: 5rem;
      }
      &:nth-child(4) {
        left: 34.6667rem;
      }
    }
  }
}
@media all and (max-width: 1180px) {
  .welcome-flower {
    .big-tree {
      left: -18rem;
    }
    .small-flower {
      &:nth-child(2) {
        left: 1.3333rem;
      }
      &:nth-child(3) {
        left: -5rem;
      }
      &:nth-child(4) {
        left: 24.6667rem;
      }
    }
  }
}
@media all and (max-width: 980px) {
  .welcome-flower {
    display: none;
  }
}
</style>