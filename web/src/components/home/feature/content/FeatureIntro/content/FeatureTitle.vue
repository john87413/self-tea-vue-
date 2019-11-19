<template>
  <div class="feature-title">
    <!-- 標題容器 -->
    <h3 class="d-flex">
      <!-- 標題 -->
      <a class="d-flex flex-column ai-center text-white fs-xxxxl">
        <!-- 大標 -->
        {{titleContent.big}}
        <!-- 小標 -->
        <span class="fs-lgx my-5">{{titleContent.small}}</span>
      </a>
    </h3>
  </div>
</template>

<script>
export default {
  props: ["titleContent"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
// title 要有出現下降效果
.feature-title {
  opacity: 0;
  transform: translateY(-15px);
  transition: all 0.8s ease 0s;
  // 標題容器
  h3 {
    a {
      font-weight: normal;
      letter-spacing: 0.1em;
    }
  }
}
// 字體放大縮小
@media all and (max-width: 840px) {
  .feature-title {
    h3 {
      a {
        font-size: 48px;
      }
    }
  }
}
@media all and (max-width: 700px) {
  .feature-title {
    h3 {
      a {
        font-size: 64px;
      }
    }
  }
}
@media all and (max-width: 420px) {
  .feature-title {
    h3 {
      a {
        font-size: 50px;
      }
    }
  }
}
</style>