<template>
  <div class="feature-title">
    <h3 class="d-flex">
      <a class="d-flex flex-column ai-center text-white fs-xxxxl">
        {{titleContent.big}}
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
.feature-title {
  opacity: 0;
  transform: translateY(-15px);
  transition: all 0.8s ease 0s;
  h3 {
    a {
      font-weight: normal;
      letter-spacing: 0.1em;
    }
  }
}
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